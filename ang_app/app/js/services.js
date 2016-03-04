app.service('werewolfService', function($http){
  var werewolfService = {};

  werewolfService.getStories = function(){
    return $http.get('http://localhost:3000/stories')
  }
  return werewolfService;
})
