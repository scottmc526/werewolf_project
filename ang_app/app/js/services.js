app.service('werewolfService', function($http){
  var werewolfService = {};

  werewolfService.getStories = function(){
    return $http.get('https://morning-brushlands-65110.herokuapp.com/stories')
  }
  return werewolfService;
})
