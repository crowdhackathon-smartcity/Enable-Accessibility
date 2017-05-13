angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('SettingsService', [function(){
  var _points = 100;

  this.points = _points;
}]);
