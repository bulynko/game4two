Meteor.startup(function () {

  if (Games.find().count() === 0) {
    var g = [
      {'name': 'gameXO',      'description': '3x3 game  for 2 players'},
      {'name': 'gameMATH',   'description': 'Fast math for 2 players'},
      {'name': 'gameWORD',  'description': 'Check the word ....'}
    ];
    for (var i = 0; i < g.length; i++)
      Games.insert({name: g[i].name, description: g[i].description});
  }
  
   
   
    
});
