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
            text(this.playerScore, this.xPlayerScoreboard, this.yPlayerScoreboard);
            text(this.opponentScore, this.xOpponentScoreboard, this.yOpponentScoreboard);
        }
        madeScore(xBall) {
            if (xBall < 12) {
                this.playerScore += 1;
                score.play();
            } else if (xBall > 990) {
                this.opponentScore += 1;  
                score.play();
            } 
        }
    }

    function createInstance() {
        return new Scoreboard();
    }
    return {
        getInstance: () => !instance ? instance = createInstance() : instance
    }
})();