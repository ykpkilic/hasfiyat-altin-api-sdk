from setuptools import setup, find_packages
setup(
    name="hasfiyat-altin-api",
    version="1.0.0",
    description="Hasfiyat Altın & Döviz Fiyat API resmi Python istemcisi (11 kaynak, REST + WebSocket).",
    long_description="Gerçek zamanlı altın, döviz ve parite fiyatları. https://altinapi.hasfiyat.com",
    url="https://altinapi.hasfiyat.com",
    license="MIT",
    author="Hasfiyat",
    packages=find_packages(exclude=["tests"]),
    python_requires=">=3.7",
    keywords="altın api gold price api döviz api turkey gold harem altın hasfiyat gram altın",
)
