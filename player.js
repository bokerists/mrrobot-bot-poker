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

        var mrrobot = gamestate.players[gamestate.me];
        var allIn = mrrobot.chips;
        
        
        //Table Logic 
        /*if(gamestate.commonCards.length >= 3) {
            if (isColor(mrrobot.cards.concat(gamestate.commonCards))) {
                return bet(allIn);
            }
        }*/

        //My Hand Logic
        if (areMyCardsTheSame(mrrobot.cards)) {
            if (isCardFigure(mrrobot.cards[0].rank)) {
                return bet(allIn);
            } else {
                return bet(allIn/2);
            }
        } else {
            if (areCardsDifferentByOne(mrrobot.cards)) {
                return bet(allIn/2);
            }

            if(isColor(mrrobot.cards)) {
              return bet(gamestate.callAmount * 2);
            }
        }


        return bet(gamestate.callAmount);

    },

    isCardFigure: function(rank) {
        return rank === 'A' || rank === 'K' || rank === 'Q' || rank === 'J';
    },

    areMyCardsTheSame: function(cards) {
        return cards[0].rank === cards[1].rank;
    },

    areCardsDifferentByOne: function(cards) {
        return Math.abs(parseCardValue(cards[0]) - parseCardValue(cards[1])) === 1;
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
            if (cards[i].type !== cards[i-1].type) {
                return false;
            }
        }
        return true;
    }
};