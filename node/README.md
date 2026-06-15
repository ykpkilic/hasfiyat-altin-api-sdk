# hasfiyat-altin-api (Node.js)

Hasfiyat **Altın & Döviz Fiyat API** resmi Node.js istemcisi. Harem Altın, Hakan Altın, Mayda Gold dahil **11 canlı kaynaktan** gerçek zamanlı altın, döviz ve parite fiyatları.

## Kurulum
```bash
npm install hasfiyat-altin-api
```

## Kullanım
```js
const { HasfiyatClient, parseTrNumber } = require('hasfiyat-altin-api');
const client = new HasfiyatClient('API_ANAHTARINIZ', { source: 'harem' });

const res = await client.getPrices({ symbols: ['HAS', 'GRAM', 'CEYREK'] });
console.log(res.source, res.count);
res.data.forEach(p => console.log(p.title, parseTrNumber(p.sell)));
```

- REST: `GET https://api.hasfiyat.com/api/prices?source=harem&symbols=HAS,GRAM`
- Kimlik: `Authorization: Bearer <API_ANAHTARI>`
- Kaynaklar: harem, harem-canli, hakan, mayda, myakche, metal, nadir, anlik, saglamoglu, agora, fikri
- WebSocket (canlı akış): `wss://api.hasfiyat.com/stream` (Socket.IO `gold_prices` olayı)

Dokümantasyon: https://altinapi.hasfiyat.com/docs · OpenAPI: https://altinapi.hasfiyat.com/openapi.json
