# hasfiyat-altin-api (Python)

Hasfiyat **Altın & Döviz Fiyat API** resmi Python istemcisi — birden fazla canlı kaynaktan canlı altın, döviz ve parite fiyatları.

## Kurulum
```bash
pip install hasfiyat-altin-api
```

## Kullanım
```python
from hasfiyat import HasfiyatClient, parse_tr_number
client = HasfiyatClient("API_ANAHTARINIZ", source="harem")
res = client.get_prices(symbols=["HAS", "GRAM", "CEYREK"])
for p in res["data"]:
    print(p["title"], parse_tr_number(p["sell"]))
```

Dokümantasyon: https://altinapi.hasfiyat.com/docs · OpenAPI: https://altinapi.hasfiyat.com/openapi.json
