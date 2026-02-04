/**
 * Migration Script - Copy and Convert Components from Vite to Next.js
 * 
 * This script helps migrate React components from the old Vite project
 * to the new Next.js structure with necessary transformations.
 */

const fs = require('fs');
const path = require('path');

const OLD_PROJECT = path.join(__dirname, '..', 'src');
const NEW_PROJECT = path.join(__dirname);

// Transformation rules for imports
const transformImports = (content) => {
  let transformed = content;

  // Replace Vite env variables with Next.js equivalents
  transformed = transformed.replace(/import\.meta\.env\.VITE_/g, 'process.env.NEXT_PUBLIC_');
  
  // Replace React Router imports
  transformed = transformed.replace(
    /import\s+{([^}]+)}\s+from\s+['"]react-router-dom['"]/g,
    (match, imports) => {
      const hasUseNavigate = imports.includes('useNavigate');
      const hasLink = imports.includes('Link');
      const hasUseLocation = imports.includes('useLocation');
      
      const parts = [];
      if (hasUseNavigate || hasLink) {
        const nextImports = [];
        if (hasUseNavigate) nextImports.push('useRouter');
        if (hasLink) nextImports.push('Link');
        parts.push(`import { ${nextImports.join(', ')} } from 'next/navigation'`);
      }
      if (hasUseLocation) {
        parts.push(`import { usePathname } from 'next/navigation'`);
      }
      return parts.join(';\n');
    }
  );

  // Replace useNavigate with useRouter
  transformed = transformed.replace(/const\s+navigate\s+=\s+useNavigate\(\)/g, 'const router = useRouter()');
  transformed = transformed.replace(/navigate\(/g, 'router.push(');
  
  // Replace useLocation with usePathname
  transformed = transformed.replace(/const\s+{\s*pathname\s*}\s+=\s+useLocation\(\)/g, 'const pathname = usePathname()');

  // Update @ alias imports
  transformed = transformed.replace(/from\s+['"]\.\.\/\.\.\/utils\//g, "from '@/lib/");
  transformed = transformed.replace(/from\s+['"]\.\.\/components\//g, "from '@/components/");
  transformed = transformed.replace(/from\s+['"]\.\.\/\.\.\/i18n\//g, "from '@/lib/");

  return transformed;
};

// Add 'use client' directive if component uses hooks
const addUseClientIfNeeded = (content, filename) => {
  const hasHooks = /use(State|Effect|Context|Ref|Callback|Memo|Reducer|LayoutEffect)/.test(content);
  const hasEventHandlers = /onClick|onChange|onSubmit|onFocus|onBlur/.test(content);
  const isPage = filename.includes('page.tsx');

  if ((hasHooks || hasEventHandlers) && !content.startsWith("'use client'")) {
    return "'use client';\n\n" + content;
  }

  return content;
};

// Copy and transform a file
const copyAndTransform = (source, destination) => {
  try {
    if (!fs.existsSync(source)) {
      console.log(`⚠️  Source not found: ${source}`);
      return false;
    }

    let content = fs.readFileSync(source, 'utf-8');
    
    // Transform imports
    content = transformImports(content);
    
    // Add 'use client' if needed
    content = addUseClientIfNeeded(content, destination);

    // Ensure destination directory exists
    const dir = path.dirname(destination);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write transformed content
    fs.writeFileSync(destination, content, 'utf-8');
    console.log(`✅ Migrated: ${path.basename(source)}`);
    return true;
  } catch (error) {
    console.error(`❌ Error migrating ${source}:`, error.message);
    return false;
  }
};

// Copy directory recursively
const copyDirectory = (source, destination) => {
  if (!fs.existsSync(source)) {
    console.log(`⚠️  Directory not found: ${source}`);
    return;
  }

  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  const entries = fs.readdirSync(source, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(source, entry.name);
    const destPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      copyAndTransform(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

console.log('🚀 Starting migration...\n');

// 1. Copy page components
console.log('📄 Migrating page components...');
const pagesSource = path.join(OLD_PROJECT, 'app', 'pages');
const pagesDestination = path.join(NEW_PROJECT, 'components', 'pages');
copyDirectory(pagesSource, pagesDestination);

// 2. Copy UI components
console.log('\n🎨 Migrating UI components...');
const componentsSource = path.join(OLD_PROJECT, 'app', 'components');
const componentsDestination = path.join(NEW_PROJECT, 'components');
copyDirectory(componentsSource, componentsDestination);

// 3. Copy imports
console.log('\n📦 Migrating import components...');
const importsSource = path.join(OLD_PROJECT, 'imports');
const importsDestination = path.join(NEW_PROJECT, 'components', 'imports');
copyDirectory(importsSource, importsDestination);

// 4. Copy utility files
console.log('\n🔧 Migrating utility files...');
const utilsSource = path.join(OLD_PROJECT, 'utils');
const utilsFiles = ['scroll.ts', 'analytics.ts', 'initAnalytics.ts'];
utilsFiles.forEach(file => {
  const source = path.join(utilsSource, file);
  const destination = path.join(NEW_PROJECT, 'lib', file);
  copyAndTransform(source, destination);
});

// 5. Copy styles
console.log('\n🎨 Migrating styles...');
const stylesSource = path.join(OLD_PROJECT, 'styles');
if (fs.existsSync(stylesSource)) {
  const stylesDestination = path.join(NEW_PROJECT, 'app');
  const styleFiles = fs.readdirSync(stylesSource);
  styleFiles.forEach(file => {
    const source = path.join(stylesSource, file);
    const destination = path.join(stylesDestination, file);
    fs.copyFileSync(source, destination);
    console.log(`✅ Copied: ${file}`);
  });
}

console.log('\n✨ Migration complete!\n');
console.log('Next steps:');
console.log('1. Review migrated files in components/pages/');
console.log('2. Create route files in app/ for each page');
console.log('3. Update any remaining imports');
console.log('4. Test the application');
