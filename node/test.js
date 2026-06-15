const assert = require('assert');
const { HasfiyatClient, parseTrNumber } = require('./index');
let pass = 0;
function ok(n, c) { assert(c, n); pass++; console.log('  ✓ ' + n); }
ok('parseTrNumber TR formatı', parseTrNumber('6.811,20') === 6811.20);
ok('parseTrNumber tam sayı', parseTrNumber('139.757,000') === 139757);
ok('apiKey zorunlu', (() => { try { new HasfiyatClient(); return false; } catch { return true; } })());
const c = new HasfiyatClient('k', { source: 'hakan', baseUrl: 'https://api.hasfiyat.com/' });
ok('baseUrl trailing slash temizlenir', c.baseUrl === 'https://api.hasfiyat.com');
ok('source ayarı', c.source === 'hakan');
ok('getPrices fonksiyon', typeof c.getPrices === 'function');
console.log(`\nSONUC: ${pass} test gecti`);
