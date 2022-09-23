var Table = require('cli-table');

const formatCoinCheck = (data, curOpt) => {
    var coinCheckTable = new Table({
        head: ['COIN', 'PRICE', 'RANK']
        , colWidths: [6, 15, 6]
    });

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: curOpt,
    });

    data.forEach(coin => {
        coinCheckTable.push(
            [coin.symbol, formatter.format(coin.price), coin.rank]
        );
    });

    return coinCheckTable.toString();
};

module.exports = { formatCoinCheck }