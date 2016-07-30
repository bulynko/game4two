
Meteor.publish("games", function (options, searchString) {
	
console.log("SERVER:  from subscribe games .....")
return Games.find({});
});

Meteor.publish("opengames", function (options, searchString) {
	
//console.log("SERVER:  from subscribe open-games .....")
//return OpenGames.find({ });

 //console.log(" current userID:  "+ this.userId + "   user: "+this.currentUser);
 
  return OpenGames.find({
     $or:[ {"player1": this.userId} ,
      {"player2": this.userId} ,
       {"player2": 'none'} ]
    });

});
