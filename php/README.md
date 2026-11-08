# hasfiyat/altin-api (PHP)

**Hasfiyat Altın API** resmi PHP istemcisi — birden fazla canlı kaynak.

## Kurulum
Paket Packagist'te **yayımlanmadı**; Composer ile paket adıyla kurmaya çalışmayın. `php/src/Client.php` dosyasını projenize kopyalayıp dahil edin:

```php
require __DIR__ . '/Client.php';
```

## Kullanım
```php
$client = new Hasfiyat\Client('API_ANAHTARINIZ', ['source' => 'harem']);
$res = $client->getPrices(['symbols' => ['HAS', 'GRAM']]);
foreach ($res['data'] as $p) echo $p['title'].' '.Hasfiyat\parse_tr_number($p['sell'])."\n";
```

Dokümantasyon: https://altinapi.hasfiyat.com/docs
