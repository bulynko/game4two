
angular.module("game4two").run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$stateChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === "AUTH_REQUIRED") {
    	$location.path("/gamexo");
      $state.go("gamexo");

    }
  });
}]);

angular.module("game4two").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $stateProvider
        .state('gamexo', {
        url: '/gamexo',
        templateUrl: 'client/gamexo/views/gamexo-start.ng.html',
        controller: 'gamexoCtrl'
      })
        .state('playgamexo', {
        url: '/playgamexo',
        templateUrl: 'client/gamexo/views/gamexo-play.ng.html',
        controller: 'playgamexoCtrl'
      })
        .state('gameone', {
        url: '/gameone',
        templateUrl: 'client/gameone/views/gameone-start.ng.html',
        controller: 'gameoneCtrl'
      })
        .state('gametwo', {
        url: '/gametwo',
        templateUrl: 'client/gametwo/views/gametwo-start.ng.html',
        controller: 'gametwoCtrl'       
      })
        .state('startgamexo', {
        url: '/gamexo/:gameId',
        templateUrl: 'client/gamexo/views/gamexo-play.ng.html',
        controller: 'playgamexoCtrl',
        resolve: {
          "currentUser": ["$meteor", function($meteor){
            return $meteor.requireUser();
          }]
        }
      });

    $urlRouterProvider.otherwise("/gamexo");

  }]);

