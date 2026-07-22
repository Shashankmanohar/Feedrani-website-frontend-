import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://feedrani.com'; // Production domain
const ROUTES_DIR = path.join(__dirname, '../src/routes');
const PUBLIC_DIR = path.join(__dirname, '../public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

// Helper to recursively get all route files
function getRouteFiles(dir, baseDir = dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getRouteFiles(filePath, baseDir));
    } else {
      if (file.endsWith('.tsx') && !file.startsWith('__')) {
        results.push(filePath);
      }
    }
  });

  return results;
}

function generateSitemap() {
  console.log('🔄 Automatically scanning routes for Sitemap generation...');

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  const files = getRouteFiles(ROUTES_DIR).filter((file) => !file.includes('admin.tsx'));
  const now = new Date().toISOString().split('T')[0];

  const urls = files
    .map((file) => {
      let relativePath = path.relative(ROUTES_DIR, file).replace(/\\/g, '/');

      // Convert file path to URL path
      // e.g., index.tsx -> /
      // e.g., about.tsx -> /about
      // e.g., products/index.tsx -> /products
      // e.g., products/poultry-feed.tsx -> /products/poultry-feed
      let routePath = relativePath.replace(/\.tsx$/, '');

      if (routePath === 'index') {
        routePath = '';
      } else if (routePath.endsWith('/index')) {
        routePath = routePath.replace(/\/index$/, '');
      }

      const fullUrl = `${SITE_URL}/${routePath}`.replace(/\/+$/, '') || SITE_URL;

      let priority = '0.8';
      let changefreq = 'weekly';

      if (routePath === '') {
        priority = '1.0';
        changefreq = 'daily';
      } else if (routePath.startsWith('products')) {
        priority = '0.9';
        changefreq = 'weekly';
      } else if (routePath === 'admin') {
        priority = '0.3';
        changefreq = 'monthly';
      } else if (routePath === 'privacy-policy' || routePath === 'terms-conditions') {
        priority = '0.5';
        changefreq = 'monthly';
      }

      return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  fs.writeFileSync(SITEMAP_PATH, sitemapXml, 'utf8');
  console.log(`✅ Sitemap successfully generated with ${files.length} pages at ${SITEMAP_PATH}`);
}

generateSitemap();
