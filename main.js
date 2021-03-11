var game = {
    money: 0,
    generator1: {
        profit: 1,
        profitadd: 1,
        cost: 4,
        level: 0,
        milestone: 25,
        time: {
            seconds: 0,
            total: 2,
        }
    }
}

function UI() {
    document.getElementById("money").innerHTML = `You have ${notate(game.money)}$`;
    document.getElementById("upgrade1").innerHTML = `Cost: ${notate(game.generator1.cost)} <br> Level: ${game.generator1.level}/${game.generator1.milestone}`;
    document.getElementById("run").innerHTML = `Run (+${notate(game.generator1.profit)}$)`;
}

function upgrade1() {
    if (Decimal.compare(game.money, game.generator1.cost) >= 0) {
        game.money = Decimal.sub(game.money, game.generator1.cost);
        game.generator1.profit = Decimal.add(game.generator1.profit, game.generator1.profitadd);
        game.generator1.cost = Decimal.times(game.generator1.cost, 1.1);
        game.generator1.level = Decimal.add(game.generator1.level, 1);
        if (Decimal.compare(game.generator1.level, game.generator1.milestone) == 0) {
            game.generator1.profit = Decimal.times(game.generator1.profit, 2);
            game.generator1.profitadd = Decimal.times(game.generator1.profitadd, 2);
            game.generator1.milestone = Decimal.add(game.generator1.milestone, 25);
            if (Decimal.compare(game.generator1.milestone, 100) <= 0) {
                game.generator1.time.total = Decimal.divide(game.generator1.time.total, 1.5);
            }
        }
    } 
}

function notate(n) {
    var e = n.exponent;
    if (e < 3) return (n.mantissa * Math.pow(10, e)).toPrecision(3);
    return `${n.mantissa.toPrecision(3)}e${e.toLocaleString("pt-BR")}`;
}

var mainGameLoop = window.setInterval(function () {
    UI();
}, 1)