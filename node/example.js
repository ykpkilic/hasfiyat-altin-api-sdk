const { HasfiyatClient, parseTrNumber } = require('./index');
const client = new HasfiyatClient(process.env.HASFIYAT_API_KEY, { source: 'harem' });
(async () => {
  const res = await client.getPrices({ symbols: ['HAS', 'GRAM', 'CEYREK'] });
  console.log('Kaynak:', res.source, '| Sembol sayısı:', res.count);
  for (const p of res.data) console.log(p.title, 'alış', parseTrNumber(p.buy), 'satış', parseTrNumber(p.sell));
})().catch((e) => { console.error('Hata:', e.message); process.exit(1); });
