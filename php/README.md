# hasfiyat/altin-api (PHP)

Hasfiyat **Altın & Döviz Fiyat API** resmi PHP istemcisi — 11 canlı kaynak.

## Kurulum
```bash
composer require hasfiyat/altin-api
```

## Kullanım
```php
$client = new Hasfiyat\Client('API_ANAHTARINIZ', ['source' => 'harem']);
$res = $client->getPrices(['symbols' => ['HAS', 'GRAM']]);
foreach ($res['data'] as $p) echo $p['title'].' '.Hasfiyat\parse_tr_number($p['sell'])."\n";
```

Dokümantasyon: https://altinapi.hasfiyat.com/docs
