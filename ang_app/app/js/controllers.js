app.controller("MainController", function($scope, $http){
   // no instance variables here....
});


app.controller('StoriesController', function($scope, $http, werewolfService){
  werewolfService.getStories().then(function(payload){
    $scope.story_collection = payload.data;
  })
})
