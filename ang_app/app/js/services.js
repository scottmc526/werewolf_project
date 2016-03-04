app.service('werewolfService', function($http){
  var werewolfService = {};

  werewolfService.getStories = function(){
    // return $http.get('http://localhost:3000/stories')
    return $http.get('https://morning-brushlands-65110.herokuapp.com/stories')
  }
  return werewolfService;
})
