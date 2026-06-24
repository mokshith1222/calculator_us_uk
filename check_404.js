const https = require('https');

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => {
      resolve({ url, status: e.message });
    });
  });
}

async function run() {
  console.log("Fetching sitemap...");
  let sitemapXml = '';
  await new Promise((resolve) => {
    https.get('https://financetoolshub-green.vercel.app/sitemap.xml', (res) => {
      res.on('data', d => sitemapXml += d);
      res.on('end', resolve);
    });
  });

  const urls = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(sitemapXml)) !== null) {
    urls.push(match[1]);
  }

  console.log(`Found ${urls.length} URLs in sitemap.`);
  
  let notFound = [];
  
  // Batch requests to avoid socket hangups
  const batchSize = 10;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(checkUrl));
    for (const r of results) {
      if (r.status === 404) {
        notFound.push(r.url);
        console.log(`404: ${r.url}`);
      }
    }
  }

  console.log(`\nTotal 404s: ${notFound.length}`);
}

run();
