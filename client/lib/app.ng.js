//var modulesToLoad = [
//  'angular-meteor',
//  'ui.router',
//  'ngMaterial'
//];

angular.module('game4two',[
  'angular-meteor',
  'ui.router',
  'ngMaterial'
//  'ngCordova'
])

  


  function onReady() {
  angular.bootstrap(document, ['game4two'], {
    strictDi: true
  });
 }


if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);
  

Meteor.startup(function() {
    Session.set("mygamexoid", localStorage.getItem("mygamexoid"));
    Session.set("mygamexotag", localStorage.getItem("mygamexotag"));

 // console.log('Configuring content-security-policy');
 // BrowserPolicy.content.allowSameOriginForAll();
 /// BrowserPolicy.content.allowOriginForAll('http://meteor.local');
 // BrowserPolicy.content.allowOriginForAll('https://meteor.local');
//  BrowserPolicy.content.allowEval();
//  BrowserPolicy.framing.disallow();
    
});
