const RATES = {
    usd: 0.014,
    eur: 0.013,
    oa: 0.052
}

function convert({rub, currency}) {
    return rub * RATES[currency]
}