angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('SettingsService', [function(){
  var _points = 100;
  var _url = "http://192.168.0.152:1337";
  // TODO persistance settings
  // TODO use enumerations
  var _mobility = "Pedestrian";
  var _units = "Km(kilometers)";
  var _dataShare = true;

  this.points = _points;
  this.url = _url;
  this.mobility = _mobility;
  this.units = _units;
  this.dataShare = _dataShare;
}]);
