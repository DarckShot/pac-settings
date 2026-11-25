function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    // Локальная сеть и российские доменные зоны
    if (
        isPlainHostName(host) ||
        host === "localhost" ||
        dnsDomainIs(host, ".local") ||
        dnsDomainIs(host, ".ru") ||
        dnsDomainIs(host, ".su") ||
        dnsDomainIs(host, ".xn--p1ai") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "127.*") ||
        shExpMatch(host, "10.*")
    ) {
        return "DIRECT";
    }

    var directDomains = [
        "darckshot-server.duckdns.org",

        // GitHub Pages — хостинг PAC
        "github.io",

        // Triad of the Mind
        "triadmind.ru",

        // Яндекс
        "yandex.ru",
        "yandex.com",
        "yastatic.net",

        // ВКонтакте
        "vk.com",
        "vk.ru",
        "vkuser.net",
        "vk-cdn.net",
        "userapi.com",

        // Wildberries
        "wildberries.ru",
        "wb.ru",
        "wbbasket.ru",
        "wbstatic.net",
        "wbxstatic.com",
        "wbcontent.net",
        "wibes.com",

        // Ozon
        "ozon.ru",
        "ozon.com",
        "ozon.by",
        "ozon.kz",
        "ozonusercontent.com",
        "ozone.ru",
        "o3.ru",

        // Госуслуги
        "gosuslugi.ru",
        "gosuslugi-dom.ru",

        // MAX
        "max.ru",

        // Альфа-Банк
        "alfabank.ru",

        // Т-Банк
        "tbank.ru",
        "tinkoff.ru",
        "tbank-online.com",

        // Сбербанк
        "sberbank.ru",
        "sber.ru",
        "sberbank.com",

        // Банк Санкт-Петербург
        "bspb.ru",

        // Райффайзенбанк
        "raiffeisen.ru",
        "raif.ru"
    ];

    for (var i = 0; i < directDomains.length; i++) {
        var domain = directDomains[i];

        if (
            host === domain ||
            dnsDomainIs(host, "." + domain)
        ) {
            return "DIRECT";
        }
    }

    // Остальные ресурсы через Happ
    // При недоступности прокси — напрямую
    return "PROXY 192.168.0.254:10810; DIRECT";
}
