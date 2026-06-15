import os
from hasfiyat import HasfiyatClient, parse_tr_number

client = HasfiyatClient(os.environ["HASFIYAT_API_KEY"], source="harem")
res = client.get_prices(symbols=["HAS", "GRAM", "CEYREK"])
print("Kaynak:", res["source"], "| Sembol:", res["count"])
for p in res["data"]:
    print(p["title"], "alış", parse_tr_number(p["buy"]), "satış", parse_tr_number(p["sell"]))
