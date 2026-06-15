"""Hasfiyat Altın & Döviz Fiyat API — resmi Python istemcisi."""
import json
import urllib.parse
import urllib.request

DEFAULT_BASE = "https://api.hasfiyat.com"


class HasfiyatClient:
    def __init__(self, api_key, base_url=DEFAULT_BASE, source="harem", timeout=15):
        if not api_key:
            raise ValueError("api_key gerekli")
        self.api_key = api_key
        self.base_url = base_url.rstrip("/")
        self.source = source
        self.timeout = timeout

    def get_prices(self, source=None, symbols=None):
        params = {"source": source or self.source}
        if symbols:
            params["symbols"] = ",".join(symbols) if isinstance(symbols, (list, tuple)) else symbols
        url = self.base_url + "/api/prices?" + urllib.parse.urlencode(params)
        req = urllib.request.Request(
            url, headers={"Authorization": "Bearer " + self.api_key, "Accept": "application/json"}
        )
        with urllib.request.urlopen(req, timeout=self.timeout) as r:
            return json.loads(r.read().decode("utf-8"))


def parse_tr_number(v):
    """'6.811,20' -> 6811.20"""
    if v is None:
        return float("nan")
    return float(str(v).replace(".", "").replace(",", "."))
