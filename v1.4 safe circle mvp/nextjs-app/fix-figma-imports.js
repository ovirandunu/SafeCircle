const fs = require('fs');
const path = require('path');

// Function to recursively find all TypeScript and TSX files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .next
      if (file !== 'node_modules' && file !== '.next') {
        findFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to replace figma imports
function replaceFigmaImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Replace all figma:asset imports with placeholder const
  const figmaImportRegex = /import\s+(\w+)\s+from\s+['"](figma:asset\/[^'"]+)['"]/g;
  
  if (figmaImportRegex.test(content)) {
    content = content.replace(figmaImportRegex, 'const $1 = \'/images/placeholder.png\'');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return 1;
  }
  
  return 0;
}

// Main execution
const componentsDir = path.join(__dirname, 'components');
const files = findFiles(componentsDir);
let fixedCount = 0;

files.forEach(file => {
  fixedCount += replaceFigmaImports(file);
});

console.log(`\nTotal files fixed: ${fixedCount}`);
