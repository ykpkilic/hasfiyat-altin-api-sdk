# Hasfiyat Altın & Döviz Fiyat API — Resmi SDK'lar

[Hasfiyat API](https://altinapi.hasfiyat.com), Harem Altın, Hakan Altın, Mayda Gold dahil **11 canlı kaynaktan** gerçek zamanlı **altın, döviz ve parite** fiyatlarını tek API'de sunar. REST ve WebSocket (Socket.IO) erişimi, IP/alan adı yetkilendirmesi ve otomatik yük devretme yerleşiktir. Trendyol, Hepsiburada, WooCommerce dahil 15 pazaryerine otomatik fiyat gönderimi içerir.

Bu repo; **Node.js, Python, PHP ve Go** için resmi istemcileri ve OpenAPI 3.1 tanımını içerir.

## İçindekiler
| Dil | Klasör | Kurulum |
|---|---|---|
| Node.js | [`node/`](node/) | `npm install hasfiyat-altin-api` |
| Python | [`python/`](python/) | `pip install hasfiyat-altin-api` |
| PHP | [`php/`](php/) | `composer require hasfiyat/altin-api` |
| Go | [`go/`](go/) | `go get github.com/ykpkilic/hasfiyat-altin-api-sdk/go` |
| OpenAPI 3.1 | [`openapi.json`](openapi.json) | — |

## Hızlı Başlangıç (REST)
```bash
curl 'https://api.hasfiyat.com/api/prices?source=harem&symbols=HAS,GRAM,CEYREK' \
  -H 'Authorization: Bearer API_ANAHTARINIZ'
```
Yanıt:
```json
{ "source": "harem", "count": 36, "data": [ { "title": "HAS ALTIN", "buy": "6.481,39", "sell": "6.811,20" } ] }
```

## Veri Kaynakları
`harem`, `harem-canli`, `hakan`, `mayda`, `myakche`, `metal`, `nadir`, `anlik`, `saglamoglu`, `agora`, `fikri` (11 kaynak — otomatik yük devretme).

## Canlı Akış (WebSocket)
`wss://api.hasfiyat.com/stream` — Socket.IO `gold_prices` olayı ile milisaniye gecikmeli akış.

## Bağlantılar
- Dokümantasyon: https://altinapi.hasfiyat.com/docs
- OpenAPI: https://altinapi.hasfiyat.com/openapi.json
- API kataloğu (RFC 9727): https://altinapi.hasfiyat.com/.well-known/api-catalog
- Web: https://altinapi.hasfiyat.com

## Lisans
MIT
