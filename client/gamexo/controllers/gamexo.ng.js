angular.module("game4two").controller("gamexoCtrl", ['$scope', '$meteor', '$rootScope', '$state', '$location',
  function($scope, $meteor, $rootScope, $state, $location){

   //Session.set("mygamexoid", localStorage.getItem("mygamexoid"));

   $scope.mygamexotag = localStorage.getItem("mygamexotag");
    if (( typeof $scope.mygamexotag === 'undefined') || ($scope.mygamexotag == null))
    {
    	$scope.mygamexotag="Small Bee"; 
    	localStorage.setItem("mygamexotag", $scope.mygamexotag);    	 
    }    
    //$rootScope.mygameTag=$scope.mygamexotag;


   $scope.mygamexoid = localStorage.getItem("mygamexoid");
    if (( typeof $scope.mygamexoid === 'undefined') || ($scope.mygamexoid == null))
    {
    	$scope.mygamexoid=Random.id(); 
    	localStorage.setItem("mygamexoid", $scope.mygamexoid);    	 
    }    
    $rootScope.myid=$scope.mygamexoid;
    
      Accounts.createUser({ email: $scope.mygamexoid , password: $scope.mygamexoid  } );    
      Meteor.loginWithPassword($scope.mygamexoid, $scope.mygamexoid);  


   

    $scope.opengames = $meteor.collection(OpenGames).subscribe('opengames');
    $scope.scores = $meteor.collection(Scores).subscribe('scores');
    $scope.games = $meteor.collection(Games).subscribe('games');
    $rootScope.gameInprogress=false;     

     

    $scope.myopengames = $meteor.collection(function() {
       return OpenGames.find({$or : [
       { player1name :  $scope.mygamexoid  },
       { player2name :  $scope.mygamexoid  }
       ]});
    });   
    
    $scope.joinopengames = $meteor.collection(function() {
       return OpenGames.find({ player1name : { $ne : $scope.mygamexoid } , player2 :  'none'  });
    });       
    
   $scope.newgame={ gameName  : 'gameXO' , gameType : 'new-game' , gamePlayer1 : $scope.mygamexotag , 
   player1: $scope.myid , player1name: $scope.mygamexoid  , player2: 'none' , player2name : 'none' , gamePlayer2: 'none' }
     

    
  //======================================================================

  $scope.startGameButton = function() {
  	    /// Meteor.call("newGame",myid);  
  	    
  	  localStorage.setItem("mygamexotag", $scope.newgame.gamePlayer1);    
     $rootScope.gameInprogress=true;     
     $scope.newgame.player1=$scope.currentUser._id;
     OpenGames.insert($scope.newgame);

  }
  

  $scope.removeGameButton = function(myid) {
   
     OpenGames.remove({ _id: myid });
 
  }  
  
  $scope.joinGameButton = function(myid ) {
   
     OpenGames.update({ _id: myid },
      { $set :
        {
          player2: $scope.currentUser._id,
          player2name: $scope.myid ,
          gamePlayer2: $scope.newgame.gamePlayer1,
          gameStatus: 1,
          gameState: [0,0,0,  0,0,0,  0,0,0] ,
          player1step: 0,
          player2step: 0,
          playerWinner: 0,
          
        }      
      });


  }    
  
  $scope.removeMeetingButton = function(id) {
//  	     Meteor.call("cancelMeeting",id);  

  };
  

}]);

 