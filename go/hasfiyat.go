// Package hasfiyat, Hasfiyat Altın & Döviz Fiyat API icin resmi Go istemcisidir.
package hasfiyat

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strings"
	"time"
)

const DefaultBase = "https://api.hasfiyat.com"

type Price struct {
	Title string `json:"title"`
	Buy   string `json:"buy"`
	Sell  string `json:"sell"`
}

type PricesResponse struct {
	Source string  `json:"source"`
	Count  int     `json:"count"`
	Data   []Price `json:"data"`
}

type Client struct {
	APIKey  string
	BaseURL string
	Source  string
	HTTP    *http.Client
}

func New(apiKey string) *Client {
	return &Client{APIKey: apiKey, BaseURL: DefaultBase, Source: "harem", HTTP: &http.Client{Timeout: 15 * time.Second}}
}

func (c *Client) GetPrices(source string, symbols ...string) (*PricesResponse, error) {
	if c.APIKey == "" {
		return nil, fmt.Errorf("apiKey gerekli")
	}
	if source == "" {
		source = c.Source
	}
	q := url.Values{}
	q.Set("source", source)
	if len(symbols) > 0 {
		q.Set("symbols", strings.Join(symbols, ","))
	}
	req, err := http.NewRequest("GET", strings.TrimRight(c.BaseURL, "/")+"/api/prices?"+q.Encode(), nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("Authorization", "Bearer "+c.APIKey)
	req.Header.Set("Accept", "application/json")
	res, err := c.HTTP.Do(req)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)
	if res.StatusCode != 200 {
		return nil, fmt.Errorf("HTTP %d: %s", res.StatusCode, string(body))
	}
	var pr PricesResponse
	if err := json.Unmarshal(body, &pr); err != nil {
		return nil, err
	}
	return &pr, nil
}

// ParseTrNumber, "6.811,20" gibi TR formatli sayiyi float64'e cevirir.
func ParseTrNumber(v string) float64 {
	s := strings.ReplaceAll(strings.ReplaceAll(v, ".", ""), ",", ".")
	var f float64
	fmt.Sscanf(s, "%f", &f)
	return f
}
