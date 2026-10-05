# Hasfiyat Altın API — Resmi SDK'lar

**Hasfiyat Altın API** (eski adıyla "Hasfiyat Altın & Döviz Fiyat API"), Türkiye'deki kuyumcu ve döviz piyasası için canlı altın, döviz ve parite fiyatlarını tek uçta sunar. Harem Altın, Hakan Altın, Mayda Gold dahil birden fazla kaynak desteklenir; bir kaynak yanıt vermezse yedek kaynağa otomatik geçilir. REST ve WebSocket (Socket.IO) ile erişilir.

> Not: Hasfiyat Altın API, `altinapi.com` adlı servisle **aynı ürün değildir**. Resmi adresimiz: <https://altinapi.hasfiyat.com>

Bu repo Node.js, Python, PHP ve Go istemcilerini ve OpenAPI 3.1 tanımını içerir.

## Kurulum

Paketler henüz npm / PyPI / Packagist'te yayımlanmadı. Şimdilik doğrudan bu repodan kurun:

| Dil | Klasör | Kurulum |
|---|---|---|
| Node.js | [`node/`](node/) | Klasörü projenize kopyalayın: `const Hasfiyat = require('./node');` |
| Python | [`python/`](python/) | `pip install "git+https://github.com/ykpkilic/hasfiyat-altin-api-sdk#subdirectory=python"` |
| PHP | [`php/`](php/) | `php/src/Client.php` dosyasını projenize ekleyin |
| Go | [`go/`](go/) | `go get github.com/ykpkilic/hasfiyat-altin-api-sdk/go` |
| OpenAPI 3.1 | [`openapi.json`](openapi.json) | Güncel tanım: <https://altinapi.hasfiyat.com/openapi.json> |

## Hızlı Başlangıç (REST)

```bash
curl 'https://api.hasfiyat.com/api/prices?source=harem&symbols=HAS,GRAM,CEYREK' \
  -H 'Authorization: Bearer API_ANAHTARINIZ'
```

Yanıt:

```json
{
  "source": "harem",
  "count": 3,
  "data": [ { "title": "HAS ALTIN", "buy": "6.481,39", "sell": "6.811,20" } ],
  "dataAgeMs": 1200,
  "stale": false,
  "lastUpdate": "2026-10-05T09:30:00.000Z"
}
```

Sorgu parametreleri: `source` (kaynak), `symbols` (virgülle ayrılmış semboller), `birim` / `units`, `ham` / `raw`, `turetilmis` / `derived`. Ayrıntılar: [dokümantasyon](https://altinapi.hasfiyat.com/docs).

## Veri Kaynakları

`harem`, `harem-canli`, `hakan`, `mayda`, `myakche`, `metal`, `nadir`, `anlik`, `saglamoglu`, `agora`, `fikri` — kaynak yanıt vermezse otomatik yük devretme.

## Canlı Akış (WebSocket)

`wss://api.hasfiyat.com/stream` — Socket.IO `gold_prices` olayı ile canlı akış.

## Fiyatlandırma

Kalıcı ücretsiz plan yoktur. Yeni üyelere kredi kartı istenmeden **10 gün ücretsiz Pro** paket tanımlanır. Güncel paketler: <https://altinapi.hasfiyat.com>

## Bağlantılar

- Dokümantasyon: <https://altinapi.hasfiyat.com/docs>
- OpenAPI: <https://altinapi.hasfiyat.com/openapi.json>
- API kataloğu (RFC 9727): <https://altinapi.hasfiyat.com/.well-known/api-catalog>
- İngilizce tanıtım: <https://altinapi.hasfiyat.com/en/turkish-gold-price-api/>
- Altın API alternatifleri karşılaştırması: <https://altinapi.hasfiyat.com/rehber/altin-api-alternatifleri>

## Lisans

MIT
