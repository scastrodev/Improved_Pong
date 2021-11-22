let scoreboardInstance = (() => {
	let instance;

    class Scoreboard {
        constructor() {
            this.playerScore = 0;
            this.opponentScore = 0;

            this.xPlayerScoreboard = 400;
            this.yPlayerScoreboard = 40;
            this.xOpponentScoreboard = 600;
            this.yOpponentScoreboard = 40;
        }

        create() {
            textAlign(CENTER);
            fill(255);
            text(this.playerScore, this.xPlayerScoreboard, this.yPlayerScoreboard);
            text(this.opponentScore, this.xOpponentScoreboard, this.yOpponentScoreboard);
        }

        madeScore(xBall) {
            if (xBall < 16) this.playerScore += 1;
            if (xBall > 984) this.opponentScore += 1;
        }
    }

    function createInstance() {
        let scoreboardSingleton = new Scoreboard();
        return scoreboardSingleton;
    }

    return {
        getInstance: () => {
            if (!instance) instance = createInstance();
            return instance;
        }
    }
})();