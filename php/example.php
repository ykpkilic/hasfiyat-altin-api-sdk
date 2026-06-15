<?php
require __DIR__ . '/src/Client.php';
$client = new Hasfiyat\Client(getenv('HASFIYAT_API_KEY'), ['source' => 'harem']);
$res = $client->getPrices(['symbols' => ['HAS', 'GRAM', 'CEYREK']]);
echo "Kaynak: {$res['source']} | Sembol: {$res['count']}\n";
foreach ($res['data'] as $p) {
    echo $p['title'] . ' satış ' . Hasfiyat\parse_tr_number($p['sell']) . "\n";
}
