module.exports =  function (playerA, playerB) {
        const winning = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };

        if (playerA === winning[playerB]) {
            return 'playerB';
        }

        if (playerB === winning[playerA]) {
            return 'playerA';
        }

        if (playerA === playerB) {
            return 'tie';
        }
        return 'not defined';

    };
