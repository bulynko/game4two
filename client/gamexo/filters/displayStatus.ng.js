

angular.module("game4two").filter('displayStatus', function () {
  return function (opengame,playerID) {
    if (!opengame)
      return;
    if ( opengame.player2 === 'none')
      return  'Waiting for second player .....';
    else
    {
      return 'Game  started :   '+ opengame.gamePlayer1  + " VS  "+opengame.gamePlayer2;
   
    }
  }
});

angular.module("game4two").filter('displayJoinStatus', function () {
  return function (opengame) {
    if (!opengame)
      return;

      return 'Play with '+opengame.gamePlayer1;

  }
});

