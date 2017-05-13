angular.module('app.controllers', [])

.controller('userCtrl', ['$scope', '$stateParams', 'SettingsService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, SettingsService) {
  $scope.points = SettingsService.points;
}])

.controller('mapCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
  var map = new GMaps({
    div: '#map',
    zoom: 14,
    lat: 37.961899,
    lng: 23.691257
  });

  var iconBase = "https://dl.dropboxusercontent.com/s/";

  var icons = {
    wheel_chair: {
      name: 'wheel chair',
      icon: iconBase + "jdsz8fv4ktnbkmk/wheel_chair.png?dl=0"
    },
    ramp: {
      name: 'ramp',
      icon: iconBase + "mmjiwgz209wk0g1/ramp.png?dl=0"
    },
    red_wheel: {
      name: 'no access',
      icon: iconBase + "56ej4x1njvw1o3p/red_wheel.png?dl=0"
    },
    visual_imp: {
      name: 'visual impaired',
      icon: iconBase + "xk0x22k3dr6x18p/vi.png?dl=0"
    },
    elev: {
      name: 'elevator',
      icon: iconBase + "1dekpsgo4p10zwn/wheel_elevator.png?dl=0"
    }
  };

  var points = [
    {
      lat: 37.96187858573322,
      lng: 23.690396547317505,
      icon: icons.wheel_chair.icon
    },{
      lat: 37.95351338271297,
      lng: 23.694315254688263,
      icon: icons.red_wheel.icon
    },{
      lat: 37.96260604160774,
      lng: 23.690943717956543,
      icon: icons.ramp.icon
    },{
      lat: 37.96296130813673,
      lng: 23.69128704071045,
      icon: icons.elev.icon
    },{
      lat: 37.95564204768705,
      lng: 23.692355901002884,
      icon: icons.red_wheel.icon
    },{
      lat: 37.95967925670532,
      lng: 23.689310252666473,
      icon: icons.red_wheel.icon
    },{
      lat: 37.9656384399164,
      lng: 23.69424819946289,
      icon: icons.red_wheel.icon
    },{
      lat: 37.963885415998256,
      lng: 23.69633361697197,
      icon: icons.red_wheel.icon
    },{
      lat: 37.96864533884555,
      lng: 23.693947792053223,
      icon: icons.elev.icon
    }
  ];

  var lines = [
    {
      color: '#40FF00',
      points: [{ lat: 37.961112, lng: 23.692995 }, { lat: 37.961714, lng: 23.692734 }]
    },{
      color: "#f00",
      points: [ { lat: 37.968091, lng: 23.693950 }, { lat: 37.968478, lng: 23.695436 } ]
    }

  ];

  points.forEach(function(point) {
    map.addMarker({
      lat: point.lat,
      lng: point.lng,
      icon: point.icon
    });
  });

  lines.forEach(function(line) {
    map.drawPolyline({
      path: line.points,
      strokeColor: line.color,
      strokeOpacity: 0.6,
      strokeWeight: 6
    });
  });

  $scope.search = function(text) {
    console.log(text);
    if (text == "parking" || text == "Parking") {
      $state.go("smartAccessibility.liveTrackingMap");
    } else {
      $state.go("smartAccessibility.navigationMap");
    }
  };

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

  $scope.save = function() {
    console.log($scope.mobility);
    SettingsService.updateMobility($scope.mobility);
    SettingsService.units = $scope.units;
    SettingsService.updateDataShare($scope.dataShare);
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
  var map = new GMaps({
    div: '#map_nav',
    zoom: 16,
    lat: 40.624090,
    lng: 22.951060
  });

  var points = [
    { lat: 40.626400, lng: 22.948675 },
    { lat: 40.614706, lng: 22.952559 }
  ];

  var lines = [
    {
      color: "#0604FF",
      points: [
                { lat: 40.626400, lng: 22.948675 },
                { lat: 40.623648, lng: 22.952259 },
                { lat: 40.622410, lng: 22.951958 },
                { lat: 40.618810, lng: 22.953203 },
                { lat: 40.614706, lng: 22.952559 }
              ]
    },{
      color: "#000",
      points: [
                { lat: 40.626400, lng: 22.948675 },
                { lat: 40.626280, lng: 22.948924 },
                { lat: 40.625224, lng: 22.948047 },
                { lat: 40.622740, lng: 22.951416 },
                { lat: 40.620802, lng: 22.952049 },
                { lat: 40.616867, lng: 22.951536 },
                { lat: 40.616619, lng: 22.952643 },
                { lat: 40.615609, lng: 22.952461 },
                { lat: 40.615202, lng: 22.952665 },
                { lat: 40.614706, lng: 22.952559 }
              ]
    }

  ];

  points.forEach(function(point) {
    map.addMarker({
      lat: point.lat,
      lng: point.lng,
      icon: point.icon
    });
  });

  lines.forEach(function(line) {
    map.drawPolyline({
      path: line.points,
      strokeColor: line.color,
      strokeOpacity: 1.0,
      strokeWeight: 4
    });
  });

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
  var map = new GMaps({
    div: '#map_live',
    zoom: 14,
    lat: 37.961899,
    lng: 23.691257
  });

  var iconBase = "https://dl.dropboxusercontent.com/s/";
  var icons = {
    green_wheel: {
      name: "green_wheel",
      icon: iconBase + "efi55gzd5ydxsnt/green_wheel.png?dl=0"
    },
    orange_wheel: {
      name: "orange_wheel",
      icon: iconBase + "8f7x7t90ejxkc3l/orange_wheel.png?dl=0"
    }
  };

  var points = [
    {
      lat: 37.96187858573322,
      lng: 23.690396547317505,
      icon: icons.green_wheel.icon,
      infoWindow: {
        content: '<p>Free Parking Space </p>'
      }
    },{
      lat: 37.95351338271297,
      lng: 23.694315254688263,
      icon: icons.orange_wheel.icon,
      infoWindow: {
        content: '<p>Reserved Parking Space </p>'
      }
    },{
      lat: 37.9656384399164,
      lng: 23.69424819946289,
      icon: icons.green_wheel.icon,
      infoWindow: {
        content: '<p>Free Parking Space </p>'
      }
    },{
      lat: 37.963885415998256,
      lng: 23.69633361697197,
      icon: icons.orange_wheel.icon,
      infoWindow: {
        content: '<p>Reserved Parking Space </p>'
      }
    }
  ];

  points.forEach(function(point) {
    map.addMarker(point);
  });

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
