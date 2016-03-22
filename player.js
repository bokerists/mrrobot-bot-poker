exports = module.exports = {

    VERSION: 'Superstar poker js-player',

    bet: function(gamestate, bet) {

        //
        // gamestate contains info about the state of the game.
        // check the documentation at https://bot-poker.herokuapp.com/wiki for further info about the data structure.

        //
        // bet is the function you should use to send your bet.



        // enjoy the game!

        //
        // currently we just fold every single hand.

        'use strict';


        //Table Logic 
        if (gamestate.commonCards.length >= 3) {
            if (isColor(player.cards.concat(gamestate.commonCards))) {
                return bet(gamestate.pot);
            }
        }

        //My Hand Logic
        if (areMyCardsTheSame(player.cards)) {
            if (isCardFigure(player.cards[0].rank)) {
                return bet(gamestate.callAmount * 3);
            } else {
                return bet(gamestate.callAmount * 2);
            }
        } else if (areCardsDifferentByOne(cards)) {
            return bet(gamestate.callAmount * 2);
        }

        console.log(`Currently playing tournament ${gamestate.tournamentId}`);

        return bet(gamestate.callAmount);

    },

    isCardFigure: function(rank) {
        return rank === 'A' || rank === 'K' || rank === 'Q' || rank === 'J';
    },

    areMyCardsTheSame: function(cards) {
        return player.cards[0].rank === player.cards[1].rank;
    },

    areCardsDifferentByOne: function(cards) {
        return Math.abs(parseCardValue(player.cards[0]) - parseCardValue(player.cards[1])) === 1;
    },

    parseCardValue: function(card) {
        if (!isCardFigure(card.rank)) {
            return parseint(card.rank);
        } else {
            if (card.rank === 'A') {
                return 14;
            } else if (card.rank === 'K') {
                return 13;
            } else if (card.rank === 'Q') {
                return 12;
            } else if (card.rank === 'J') {
                return 11;
            }
        }
    },
    isColor: function(cards) {
        for (var i = cards.length - 1; i >= 0; i--) {
            if (cards[i].type !== cards[i - 1].type) {
                return false;
            }
        }
        return true;
    }
};