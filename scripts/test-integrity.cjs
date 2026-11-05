const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('VASUNDHARA DIARY AND FARMS — INTEGRITY AUDIT TEST');
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
    passCount++;
  } else {
    console.error(`❌ FAIL: ${testName} - ${details}`);
    failCount++;
  }
}

// 1. Check Images in public/images
const imagesDir = path.join(__dirname, '..', 'public', 'images');
const requiredImages = [
  'hero-dairy.jpg',
  'cattle-shed.jpg',
  'farm-landscape.jpg',
  'hf-cow.jpg',
  'jersey-cow.jpg',
  'dairy-products.jpg',
  'milk.jpg',
  'curd.jpg',
  'paneer.jpg',
  'ghee.jpg',
  'buttermilk.jpg',
];

console.log('--- TEST SUITE 1: Image Asset Availability & Integrity ---');
requiredImages.forEach((img) => {
  const fullPath = path.join(imagesDir, img);
  const exists = fs.existsSync(fullPath);
  let fileSize = 0;
  if (exists) {
    fileSize = fs.statSync(fullPath).size;
  }
  assert(exists && fileSize > 50000, `Image asset exists: ${img} (${(fileSize / 1024).toFixed(1)} KB)`);
});

// 2. Check Favicon & HTML metadata
console.log('\n--- TEST SUITE 2: Favicon & SEO Meta Tags ---');
const faviconPath = path.join(__dirname, '..', 'public', 'favicon.svg');
assert(fs.existsSync(faviconPath), 'Favicon SVG exists in public/');

const htmlPath = path.join(__dirname, '..', 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
assert(htmlContent.includes('<title>Vasundhara Diary and Farms'), 'Page Title set correctly in index.html');
assert(htmlContent.includes('name="description"'), 'Meta description present in index.html');
assert(htmlContent.includes('name="theme-color" content="#164D32"'), 'Theme color #164D32 present in index.html');
assert(htmlContent.includes('Plus+Jakarta+Sans'), 'Google Fonts preloaded');

// 3. Check Content consistency
console.log('\n--- TEST SUITE 3: Content & Contact Information Consistency ---');
const contentPath = path.join(__dirname, '..', 'src', 'data', 'content.ts');
const contentSrc = fs.readFileSync(contentPath, 'utf-8');

assert(contentSrc.includes('bharathkm@gmail.com'), 'Email configured as bharathkm@gmail.com');
assert(contentSrc.includes('+91 80880 50628'), 'Phone configured as +91 80880 50628');
assert(contentSrc.includes('+918088050628'), 'WhatsApp configured as +918088050628');
assert(contentSrc.includes('Megalahundi'), 'Registered office Megalahundi configured');
assert(contentSrc.includes('Chamarajanagara'), 'Registered office Chamarajanagara configured');
assert(contentSrc.includes('7:00 am to 4:00 pm'), 'Office hours configured');
assert(contentSrc.includes('Organic Fresh Buttermilk'), 'Organic Fresh Buttermilk configured');
assert(contentSrc.includes('Sexed Semen of Top Breeds'), 'Sexed Semen of Top Breeds breeding info configured');
assert(contentSrc.includes('5.5 Acres'), 'Land size configured as 5.5 Acres');
assert(contentSrc.includes('20 Planned'), 'Planned livestock capacity configured as 20 Planned');
assert(contentSrc.includes('Holstein Friesian (HF)'), 'HF Cattle details present');
assert(contentSrc.includes('Jersey Cattle'), 'Jersey Cattle details present');

// 4. Check Pages exist
console.log('\n--- TEST SUITE 4: 6 Complete Pages Availability ---');
const pagesDir = path.join(__dirname, '..', 'src', 'pages');
const pages = [
  'HomePage.tsx',
  'AboutPage.tsx',
  'FarmPage.tsx',
  'ProductsPage.tsx',
  'SustainabilityPage.tsx',
  'ContactPage.tsx',
];

pages.forEach((page) => {
  const pPath = path.join(pagesDir, page);
  const exists = fs.existsSync(pPath);
  const stats = exists ? fs.statSync(pPath) : null;
  assert(exists && stats.size > 2000, `Page component exists and is non-empty: ${page} (${stats ? stats.size : 0} bytes)`);
});

// 5. Check Components exist
console.log('\n--- TEST SUITE 5: Components & Modals Availability ---');
const compDir = path.join(__dirname, '..', 'src', 'components');
const components = [
  'Navbar.tsx',
  'Footer.tsx',
  'Logo.tsx',
  'EnquiryModal.tsx',
  'ImageLightboxModal.tsx',
  'LegalModals.tsx',
  'WhatsAppButton.tsx',
  'LeafDecoration.tsx',
  'CurvedDivider.tsx',
];

components.forEach((comp) => {
  const cPath = path.join(compDir, comp);
  const exists = fs.existsSync(cPath);
  assert(exists, `Component exists: ${comp}`);
});

// 6. Check Dynamic Marquee & Animated Text
console.log('\n--- TEST SUITE 6: Dynamic Headline & Marquee Ticker ---');
const homeSrc = fs.readFileSync(path.join(pagesDir, 'HomePage.tsx'), 'utf-8');
assert(homeSrc.includes('dynamicPhrases'), 'Dynamic phrase array present in HomePage');
assert(homeSrc.includes('animate-marquee'), 'Continuous flowing marquee ticker present in HomePage');
assert(homeSrc.includes('animate-text-flow'), 'Animated gradient shimmer text flow present in HomePage');

// Summary
console.log('\n====================================================');
console.log(`TOTAL TESTS: ${passCount + failCount} | PASSED: ${passCount} | FAILED: ${failCount}`);
console.log('====================================================\n');

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL INTEGRITY TESTS PASSED SUCCESSFULLY!\n');
  process.exit(0);
}
