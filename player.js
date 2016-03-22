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


        if (areMyCardsTheSame(player.cards)) {
            if (isCardFigure(player.cards[0].rank)) {
                return bet(gamestate.pot);
            } else {
                return bet(gamestate.sb * 3);
            }
        }

        console.log(`Currently playing tournament ${gamestate.tournamentId}`);

        return bet(0);

    },

    isCardFigure: function(rank) {
        return rank === 'A' || rank === 'K' || rank === 'Q' || rank === 'J';
    },

    areMyCardsTheSame: function(cards){
      return player.cards[0].rank === player.cards[1].rank;
    }

};