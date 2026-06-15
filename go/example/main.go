package main

import (
	"fmt"
	"os"

	hasfiyat "github.com/ykpkilic/hasfiyat-altin-api-sdk/go"
)

func main() {
	c := hasfiyat.New(os.Getenv("HASFIYAT_API_KEY"))
	res, err := c.GetPrices("harem", "HAS", "GRAM", "CEYREK")
	if err != nil {
		fmt.Println("Hata:", err)
		os.Exit(1)
	}
	fmt.Println("Kaynak:", res.Source, "| Sembol:", res.Count)
	for _, p := range res.Data {
		fmt.Println(p.Title, "satış", hasfiyat.ParseTrNumber(p.Sell))
	}
}
