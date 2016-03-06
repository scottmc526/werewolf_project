app.service('werewolfService', function($http){
  var werewolfService = {};

  werewolfService.getStories = function(){
    return $http.get('https://morning-brushlands-65110.herokuapp.com/stories')
  }

  werewolfService.postStory = function(story){
    return $http.post('https://morning-brushlands-65110.herokuapp.com/stories', story, {method:'jsonp'})
  }
  return werewolfService;
})
