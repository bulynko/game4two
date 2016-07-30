angular.module("game4two").controller("playgamexoCtrl", ['$scope', '$stateParams', '$meteor', '$rootScope', '$state',
  function($scope,  $stateParams, $meteor, $rootScope, $state){

 
    console.log(" Controller for play-game-XO ..... "+  $rootScope.myid );

  //  $scope.opengames = $meteor.collection(OpenGames).subscribe('opengames');
    $scope.scores = $meteor.collection(Scores).subscribe('scores');
    $scope.games = $meteor.collection(Games).subscribe('games');

   // $scope.cellColor="red";     

    $scope.thegame = $meteor.object(OpenGames, $stateParams.gameId);     

    $scope.theplayer=0;
     console.log(" check ..... "+  $rootScope.myid +" =?=  "+$scope.thegame.player1name);
    if ( $rootScope.myid == $scope.thegame.player1name ) 
    {
     $scope.theplayer=1;  
     $scope.theplayername=$scope.thegame.gamePlayer1;     
     $scope.theplayercolor="blue";
     
     $scope.thepeer=2;   
     $scope.thepeername=$scope.thegame.gamePlayer2;    
     $scope.thepeercolor="orange";    
     
    }
    
    if ( $rootScope.myid == $scope.thegame.player2name ) 
    {     
     $scope.theplayer=2; 
     $scope.theplayername=$scope.thegame.gamePlayer2;     
     $scope.theplayercolor="orange";
     
     $scope.thepeer=1; 
     $scope.thepeername=$scope.thegame.gamePlayer1;   
     $scope.thepeercolor="blue";;    
    }


 $scope.gamestyle=["background-color: green ;  ","background-color: blue ; " ,"background-color: orange ;" ]

 $scope.gamepattern=[[ 0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] ,[1,4,7] , [2,5,8] , [0,4,8] , [2,4,6]];

    
//=========================================================================== 
 
   $scope.scoreGamexoButton = function(cellID) {
  
   $scope.gameMessage=""; 	
   	
   if ((  $scope.thegame.gameState[cellID] == 0 )	&&
       (  $scope.thegame.gameStatus ==  $scope.theplayer ))
   {
    $scope.cellColor="blue";   
     if ( $scope.thegame.gameStatus === 1 )  $scope.thegame.gameStatus=2;
     else  if ( $scope.thegame.gameStatus === 2 )  $scope.thegame.gameStatus=1;
           
     $scope.thegame.gameState[cellID]= $scope.theplayer;    
     console.log(" scoring game : "+cellID);
     $scope.checkGame();   
          
  }
   else
     if ( $scope.thegame.gameStatus != 100 ) 
      { $scope.gameMessage=" waiting  ....." }
 
  }
  
   
 
 //==========================================================================
    
     
   $scope.checkGame = function() {
   var a=0;
   var b=0;
   var c=0;
   var nowinner=1;
   
   for ( var i = 0 ; i<  $scope.gamepattern.length ; i ++ )
   {
   	a=$scope.gamepattern[i][0];
   	b=$scope.gamepattern[i][1];
   	c=$scope.gamepattern[i][2];
	  
   	
       if  ((  $scope.thegame.gameState[a] === $scope.theplayer ) && 
        (  $scope.thegame.gameState[b] === $scope.theplayer ) && 
         (  $scope.thegame.gameState[c] === $scope.theplayer ) )
         {  $scope.thegame.gameStatus=100;
            $scope.thegame.playerWinner=$scope.theplayer;
         $scope.gameMessage="  WINNER "};
    
         if  ((  $scope.thegame.gameState[a] === $scope.thepeer ) && 
        (  $scope.thegame.gameState[b] === $scope.thepeer ) && 
         (  $scope.thegame.gameState[c] === $scope.thepeer ) )
         { $scope.thegame.gameStatus=100;
         $scope.thegame.playerWinner=$scope.thepeer;
           $scope.gameMessage="  LOSER !!!! "};     

       
       if  (  $scope.thegame.gameState[a] === 0 ) nowinner=0;
       if  (  $scope.thegame.gameState[b] === 0 ) nowinner=0;
       if  (  $scope.thegame.gameState[c] === 0 ) nowinner=0;
                      
    //    console.log(" check ..."+  $scope.thegame.gameState[a]+ "," + $scope.thegame.gameState[b] +" " + $scope.thegame.gameState[c]);  
   }

    if ((nowinner === 1) && (  $scope.thegame.gameStatus != 100  ))   
   {
   	   $scope.thegame.gameStatus=100;
         $scope.thegame.playerWinner=3;
         $scope.gameMessage="  Lazy Game  !!!! "
   }
  }
    
    
 }]);