#!/usr/bin/env node

/**
 * SafeCircle Environment Validation Script
 * 
 * This script checks if all required environment variables are configured
 * and provides helpful guidance for missing values.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

function log(message, color = 'reset') {
  console.log(colors[color] + message + colors.reset);
}

function checkEnvFile() {
  const envPath = path.join(__dirname, '.env');
  
  if (!fs.existsSync(envPath)) {
    log('\n❌ .env file not found!', 'red');
    log('\n📝 Please copy .env.example to .env:', 'yellow');
    log('   cp .env.example .env', 'cyan');
    log('\nThen fill in your actual values.\n', 'yellow');
    return false;
  }
  
  return true;
}

function parseEnvFile() {
  const envPath = path.join(__dirname, '.env');
  const envContent = fs.readFileSync(envPath, 'utf8');
  const env = {};
  
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && !key.startsWith('#')) {
      env[key.trim()] = valueParts.join('=').trim();
    }
  });
  
  return env;
}

function validateEnv() {
  log('\n' + '='.repeat(60), 'cyan');
  log('  SafeCircle Environment Validation', 'bold');
  log('='.repeat(60) + '\n', 'cyan');

  if (!checkEnvFile()) {
    process.exit(1);
  }

  const env = parseEnvFile();
  
  const required = {
    'STRIPE': [
      { key: 'VITE_STRIPE_PUBLISHABLE_KEY', desc: 'Stripe Publishable Key', link: 'https://dashboard.stripe.com/apikeys' },
      { key: 'STRIPE_SECRET_KEY', desc: 'Stripe Secret Key', link: 'https://dashboard.stripe.com/apikeys' },
      { key: 'STRIPE_PRICE_BASIC_MONTHLY', desc: 'Basic Monthly Price ID', link: 'https://dashboard.stripe.com/products' },
      { key: 'STRIPE_PRICE_BASIC_YEARLY', desc: 'Basic Yearly Price ID', link: 'https://dashboard.stripe.com/products' },
      { key: 'STRIPE_PRICE_FULL_MONTHLY', desc: 'Full Monthly Price ID', link: 'https://dashboard.stripe.com/products' },
      { key: 'STRIPE_PRICE_FULL_YEARLY', desc: 'Full Yearly Price ID', link: 'https://dashboard.stripe.com/products' },
    ],
    'DATABASE': [
      { key: 'DATABASE_URL', desc: 'PostgreSQL Connection String', link: 'See database/schema.sql' },
    ],
    'API URLS': [
      { key: 'VITE_API_URL', desc: 'Backend API URL', link: 'http://localhost:3001 for local dev' },
      { key: 'VITE_APP_URL', desc: 'Frontend URL', link: 'http://localhost:5173 for local dev' },
    ],
  };

  const optional = {
    'ANALYTICS': [
      { key: 'VITE_GA_MEASUREMENT_ID', desc: 'Google Analytics Measurement ID', link: 'https://analytics.google.com' },
      { key: 'VITE_CLARITY_PROJECT_ID', desc: 'Microsoft Clarity Project ID', link: 'https://clarity.microsoft.com' },
      { key: 'VITE_HOTJAR_ID', desc: 'Hotjar Site ID', link: 'https://insights.hotjar.com' },
    ],
    'SUPABASE & EMAIL': [
      { key: 'VITE_SUPABASE_URL', desc: 'Supabase Project URL', link: 'https://app.supabase.com' },
      { key: 'VITE_SUPABASE_ANON_KEY', desc: 'Supabase Anonymous Key', link: 'https://app.supabase.com' },
      { key: 'RESEND_API_KEY', desc: 'Resend API Key', link: 'https://resend.com/api-keys' },
    ],
    'WEBHOOKS': [
      { key: 'STRIPE_WEBHOOK_SECRET', desc: 'Stripe Webhook Secret', link: 'Run: stripe listen --forward-to localhost:3001/api/webhooks/stripe' },
    ],
  };

  let hasErrors = false;
  let hasWarnings = false;

  // Check required variables
  Object.entries(required).forEach(([category, vars]) => {
    log(`\n${category}:`, 'bold');
    vars.forEach(({ key, desc, link }) => {
      const value = env[key];
      const isSet = value && value !== '' && !value.includes('your_') && !value.includes('YOUR_') && !value.includes('xxx');
      
      if (isSet) {
        log(`  ✅ ${desc}`, 'green');
      } else {
        log(`  ❌ ${desc} - NOT SET`, 'red');
        log(`     Variable: ${key}`, 'yellow');
        log(`     Get it from: ${link}`, 'cyan');
        hasErrors = true;
      }
    });
  });

  // Check optional variables
  Object.entries(optional).forEach(([category, vars]) => {
    log(`\n${category} (Optional):`, 'bold');
    vars.forEach(({ key, desc, link }) => {
      const value = env[key];
      const isSet = value && value !== '' && !value.includes('your_') && !value.includes('YOUR_') && !value.includes('xxx');
      
      if (isSet) {
        log(`  ✅ ${desc}`, 'green');
      } else {
        log(`  ⚠️  ${desc} - Not configured`, 'yellow');
        log(`     Variable: ${key}`, 'yellow');
        log(`     Get it from: ${link}`, 'cyan');
        hasWarnings = true;
      }
    });
  });

  // Summary
  log('\n' + '='.repeat(60), 'cyan');
  
  if (!hasErrors && !hasWarnings) {
    log('\n🎉 All environment variables configured!', 'green');
    log('\nYou can now run:', 'bold');
    log('  npm install   # Install dependencies', 'cyan');
    log('  npm start     # Start frontend and backend\n', 'cyan');
  } else if (!hasErrors && hasWarnings) {
    log('\n✅ Required variables configured!', 'green');
    log('⚠️  Some optional variables are missing (analytics, email, etc.)', 'yellow');
    log('\nYou can still run the app:', 'bold');
    log('  npm install', 'cyan');
    log('  npm start\n', 'cyan');
    log('Configure optional variables later for full functionality.\n', 'yellow');
  } else {
    log('\n❌ Missing required environment variables!', 'red');
    log('\nPlease configure the variables marked with ❌ above.', 'yellow');
    log('\nSee ENV_SETUP_GUIDE.md for detailed instructions.\n', 'cyan');
    process.exit(1);
  }

  log('='.repeat(60) + '\n', 'cyan');
}

// Run validation
validateEnv();
