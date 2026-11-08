# hasfiyat-altin-api (Python)

**Hasfiyat Altın API** resmi Python istemcisi — birden fazla canlı kaynaktan canlı altın, döviz ve parite fiyatları.

## Kurulum
Paket PyPI'da **yayımlanmadı**; paket adıyla pip kurulumu yapmayın. Doğrudan bu repodan kurun:

```bash
pip install "git+https://github.com/ykpkilic/hasfiyat-altin-api-sdk#subdirectory=python"
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
