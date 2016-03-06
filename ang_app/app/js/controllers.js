app.controller("MainController", function($scope, $http){
   // no instance variables here....
});


app.controller('StoriesController', function($scope, $http, werewolfService){
  werewolfService.getStories().then(function(payload){
    $scope.story_collection = payload.data;
  })
})

app.controller('PostController', function($scope, $http, $window, werewolfService){
  $scope.story = {};
  $scope.newStory = function(){
    story_info = $scope.story
    werewolfService.postStory(story_info);
    $window.location.href = '/stories';
  }
})

app.controller('RandomController', function($scope, $http, $window, werewolfService){
  werewolfService.getStories().then(function(payload){
    $scope.story_collection = payload.data;
    // console.log($scope.story_collection[0]);
    $scope.randomStory =  function(){
      $scope.rando = [];
      $scope.num = Math.ceil(Math.random() * ($scope.story_collection.length - 0)) + 0;
      $scope.rando.push($scope.story_collection[$scope.num])
      console.log($scope.rando);
    }
  })
})
