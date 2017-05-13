angular.module('app.controllers', [])

.controller('userCtrl', ['$scope', '$stateParams', 'SettingsService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, SettingsService) {
  $scope.points = SettingsService.points;
}])

.controller('mapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  var list = [];
  var path = [];

  function addList(item) {
    list.push(item);
  }

  function addPath(lng, lat) {
    path.push([lat, lng]);
  }

  $scope.getCoords = function() {
    $scope.list = list;
    $scope.itemsText = "";
    list.forEach(function(item) {
      list += item + ",";
    });
  };

  $scope.draw = function() {
    map.drawPolyline({
      path: path,
      strokeColor: '#131540',
      strokeOpacity: 0.6,
      strokeWeight: 6
    });
  };

  var map = new GMaps({
    div: '#map',
    zoom: 14,
    lat: 37.9671,
    lng: 23.6947,
    click: function(e) {
      addList({lat:e.latLng.lat(), lng: e.latLng.lng()});
      addPath(e.latLng.lng(), e.latLng.lat());
      map.addMarker({
        lng: e.latLng.lng(),
        lat: e.latLng.lat(),
        infoWindow: {
          // TODO marker Description
          content: '<h4>Marker</h4><p>Marker Description <a href="#/feedback" id="map-feedback" class="button button-small button-positive  button-block">Leave a comment</a></p>'
        }
      });
    }
  });
}])

.controller('reportCtrl', ['$scope', '$http', 'SettingsService', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, SettingsService, $stateParams) {
  $scope.type = 'ramp';

  $scope.save = function() {
    var url = SettingsService.url + "/report";
    var data = {
      point: {
        // TODO use actual position
        lng: 30.5489,
        lat: 27.3256
      },
      type: $scope.type,
      description: $scope.comment
      // TODO send image
    };
    $http.post(url, data);
  };

}])

.controller('smartAccessibilityCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('settingsCtrl', ['$scope', 'SettingsService', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, SettingsService, $stateParams) {
  $scope.mobility = SettingsService.mobility;
  $scope.units = SettingsService.units;
  $scope.dataShare = SettingsService.dataShare;

  $scope.updateMob = function() {
    SettingsService.mobility = $scope.mobility;
  };

  $scope.updateUnits = function() {
    SettingsService.units = $scope.units;
  };

  $scope.updateData = function() {
    SettingsService.dataShare = $scope.dataShare;
  };

}])

.controller('advertisementCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('municipalityCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  var map = new GMaps({
    div: '#map_municipality',
    zoom: 15,
    lat: 37.961899,
    lng: 23.691257,
    markerClusterer: function(map) {
      options = {
        gridSize: 40,
        imagePath: 'https://users.auth.gr/karatakis/m'
      }

      return new MarkerClusterer(map, map.markers, options);
    }
  });

  // TODO mobile not working
  // TODO hide municipality
  // TODO use labels and descriptions

  points = [
    {lat: 37.967531, lng: 23.694797},
    {lat: 37.963306, lng: 23.692103},
    {lat: 37.958329, lng: 23.683769},
    {lat: 37.959381, lng: 23.683224},
    {lat: 37.968144, lng: 23.696800}
  ];

  points.forEach(function(point) {
    map.addMarker({
       lat: point.lat,
       lng: point.lng,
       label: '!'
   });
  });
}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('redeemPointsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  // TODO redeem and remove points
  // TODO get award
  $scope.vouchers = [
    {
      description: '1 + 1 Pizza Free',
      icon: 'https://t4.ftcdn.net/jpg/01/04/18/59/500_F_104185983_85wKjFhEy61N3lS6IVb5il7mxyLELFqJ.jpg',
      points: 20
    },
    {
      description: '20% discount',
      icon: 'https://cdn.shopify.com/s/files/1/0825/4215/files/coupon_6256.jpg?6454345827407225597',
      points: 50
    },
    {
      description: '2 free tickets',
      icon: 'https://fanbackedcdn.s3.amazonaws.com/b8c76f7a-e4bc-4a14-a2d9-87afaae37eaa.png',
      points: 100
    },
    {
      description: '100 Euro Travel Expenses',
      icon: 'https://t3.ftcdn.net/jpg/00/95/78/34/240_F_95783471_mXK1MYkuX8N1ZzNFjvi7wR4ezSKtuH2W.jpg',
      points: 500
    },
  ];

}])

.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('feedbackCtrl', ['$scope', '$http','$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $state) {
  $scope.rating = '1';

  $scope.save = function() {
    var url = "http://192.168.0.152:1337/review";
    var data = {
      report: {
        // TODO use actual id
        id: 1
      },
      ranking: $scope.rating,
      comment: $scope.comment
      // TODO ionic get image
    };
    $http.post(url, data);
    // TODO bug map not showing
    $state.go("smartAccessibility.map");
  }

}])

.controller('reportListCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('reviewListCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('navigationMapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('accessibilityMapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('liveTrackingMapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('vouchersPromotionsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  // TODO modify voucher
  // TODO add voucher
  // TODO remove vouchre

  $scope.vouchers = [
    {
      description: '1 + 1 Pizza Free',
      icon: 'https://t4.ftcdn.net/jpg/01/04/18/59/500_F_104185983_85wKjFhEy61N3lS6IVb5il7mxyLELFqJ.jpg',
      points: 20
    },
    {
      description: '20% discount',
      icon: 'https://cdn.shopify.com/s/files/1/0825/4215/files/coupon_6256.jpg?6454345827407225597',
      points: 50
    },
    {
      description: '2 free tickets',
      icon: 'https://fanbackedcdn.s3.amazonaws.com/b8c76f7a-e4bc-4a14-a2d9-87afaae37eaa.png',
      points: 100
    },
    {
      description: '100 Euro Travel Expenses',
      icon: 'https://t3.ftcdn.net/jpg/00/95/78/34/240_F_95783471_mXK1MYkuX8N1ZzNFjvi7wR4ezSKtuH2W.jpg',
      points: 500
    },
  ];

}])

.controller('addVoucherPromotionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
