<?php
namespace Hasfiyat;

class Client
{
    private $apiKey;
    private $baseUrl;
    private $source;
    private $timeout;

    public function __construct($apiKey, array $opts = [])
    {
        if (!$apiKey) {
            throw new \InvalidArgumentException('apiKey gerekli');
        }
        $this->apiKey  = $apiKey;
        $this->baseUrl = rtrim($opts['baseUrl'] ?? 'https://api.hasfiyat.com', '/');
        $this->source  = $opts['source'] ?? 'harem';
        $this->timeout = $opts['timeout'] ?? 15;
    }

    public function getPrices(array $opts = [])
    {
        $params = ['source' => $opts['source'] ?? $this->source];
        if (!empty($opts['symbols'])) {
            $params['symbols'] = is_array($opts['symbols']) ? implode(',', $opts['symbols']) : $opts['symbols'];
        }
        $url = $this->baseUrl . '/api/prices?' . http_build_query($params);
        $ch  = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => $this->timeout,
            CURLOPT_HTTPHEADER     => ['Authorization: Bearer ' . $this->apiKey, 'Accept: application/json'],
        ]);
        $body = curl_exec($ch);
        $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        if ($code !== 200) {
            throw new \RuntimeException("HTTP $code: " . substr((string) $body, 0, 200));
        }
        return json_decode($body, true);
    }
}

function parse_tr_number($v)
{
    if ($v === null) {
        return NAN;
    }
    return (float) str_replace(',', '.', str_replace('.', '', (string) $v));
}
