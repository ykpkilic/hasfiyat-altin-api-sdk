from hasfiyat import HasfiyatClient, parse_tr_number

def test_parse():
    assert parse_tr_number("6.811,20") == 6811.20
    assert parse_tr_number("139.757,000") == 139757.0

def test_init():
    c = HasfiyatClient("k", base_url="https://api.hasfiyat.com/", source="hakan")
    assert c.base_url == "https://api.hasfiyat.com"
    assert c.source == "hakan"

def test_apikey_required():
    try:
        HasfiyatClient("")
        assert False
    except ValueError:
        assert True

if __name__ == "__main__":
    test_parse(); test_init(); test_apikey_required()
    print("3 test gecti")
