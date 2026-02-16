const fs = require('fs');

async function captureDOM(page) {
  try {
    const html = await page.evaluate(() => document.documentElement.outerHTML);
    fs.mkdirSync('qa-agents/agent', { recursive: true });
    fs.writeFileSync('qa-agents/agent/failed-dom.html', html);
  } catch (e) {
    console.error('DOM capture failed', e);
  }
}

module.exports = { captureDOM };