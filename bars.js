function move1() {
    if (game.generator1.time.seconds == 0) {
        game.generator1.time.seconds = 10;
        var elem = document.getElementById("myBar");
        var width = 0;
        var id = setInterval(frame1, Decimal.times(10, game.generator1.time.total));

        function frame1() {
            if (width >= 100) {
                clearInterval(id);
                game.generator1.time.seconds = 0;
                game.money = Decimal.add(game.money, game.generator1.profit);
                if (Decimal.compare(game.generator1.level, 25) >= 0) {
                    move1()
                }
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}