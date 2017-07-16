module.exports = {
    rockPaperScizzors: (playerA, playerB) => {
        const winning = {
            rock: 'scizzors',
            paper: 'rock',
            scizzors: 'paper'
        };

        if (playerA === winning[playerB]) {
            return playerB;
        }

        if (playerB === winning[playerA]) {
            return playerA;
        }

        return 'tie';

    }
};