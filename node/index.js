'use strict';
const https = require('https');
const DEFAULT_BASE = 'https://api.hasfiyat.com';

class HasfiyatClient {
  constructor(apiKey, opts = {}) {
    if (!apiKey) throw new Error('apiKey gerekli');
    this.apiKey = apiKey;
    this.baseUrl = (opts.baseUrl || DEFAULT_BASE).replace(/\/+$/, '');
    this.source = opts.source || 'harem';
    this.timeout = opts.timeout || 15000;
  }
  getPrices({ source, symbols } = {}) {
    const params = new URLSearchParams();
    params.set('source', source || this.source);
    if (symbols) params.set('symbols', Array.isArray(symbols) ? symbols.join(',') : symbols);
    const url = `${this.baseUrl}/api/prices?${params.toString()}`;
    return new Promise((resolve, reject) => {
      const req = https.request(url, { method: 'GET', timeout: this.timeout,
        headers: { Authorization: `Bearer ${this.apiKey}`, Accept: 'application/json' } }, (res) => {
        let body = '';
        res.on('data', (c) => (body += c));
        res.on('end', () => {
          if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}: ${body.slice(0, 200)}`));
          try { resolve(JSON.parse(body)); } catch (e) { reject(e); }
        });
      });
      req.on('error', reject);
      req.on('timeout', () => req.destroy(new Error('istek zaman aşımı')));
      req.end();
    });
  }
}
function parseTrNumber(v) {
  if (v == null) return NaN;
  return parseFloat(String(v).replace(/\./g, '').replace(',', '.'));
}
module.exports = { HasfiyatClient, parseTrNumber };
