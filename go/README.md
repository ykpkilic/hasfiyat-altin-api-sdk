# altin-api-go (Go)

Hasfiyat **Altın & Döviz Fiyat API** resmi Go istemcisi — 11 canlı kaynak.

## Kurulum
```bash
go get github.com/ykpkilic/hasfiyat-altin-api-sdk/go
```

## Kullanım
```go
c := hasfiyat.New("API_ANAHTARINIZ")
res, _ := c.GetPrices("harem", "HAS", "GRAM")
for _, p := range res.Data { fmt.Println(p.Title, hasfiyat.ParseTrNumber(p.Sell)) }
```

Dokümantasyon: https://altinapi.hasfiyat.com/docs
