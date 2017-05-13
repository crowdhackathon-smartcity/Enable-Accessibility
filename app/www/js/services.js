angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('SettingsService', [function(){
  var _points = 100;
  var _url = "http://192.168.0.152:1337";

  this.points = _points;
  this.url = _url;
}]);
