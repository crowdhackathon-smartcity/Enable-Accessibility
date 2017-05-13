angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('smartAccessibility.user', {
    url: '/user',
    views: {
      'side-menu21': {
        templateUrl: 'templates/user.html',
        controller: 'userCtrl'
      }
    }
  })

  .state('smartAccessibility.map', {
    url: '/map',
    views: {
      'side-menu21': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('smartAccessibility.report', {
    url: '/report',
    params: {lat: 0, lng: 0},
    views: {
      'side-menu21': {
        templateUrl: 'templates/report.html',
        controller: 'reportCtrl'
      }
    }
  })

  .state('smartAccessibility', {
    url: '/list-menu',
    templateUrl: 'templates/smartAccessibility.html',
    controller: 'smartAccessibilityCtrl'
  })

  .state('smartAccessibility.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('smartAccessibility.advertisement', {
    url: '/advertisement',
    views: {
      'side-menu21': {
        templateUrl: 'templates/advertisement.html',
        controller: 'advertisementCtrl'
      }
    }
  })

  .state('smartAccessibility.municipality', {
    url: '/municipality',
    views: {
      'side-menu21': {
        templateUrl: 'templates/municipality.html',
        controller: 'municipalityCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('smartAccessibility.redeemPoints', {
    url: '/redeem',
    views: {
      'side-menu21': {
        templateUrl: 'templates/redeemPoints.html',
        controller: 'redeemPointsCtrl'
      }
    }
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('feedback', {
    url: '/feedback',
    templateUrl: 'templates/feedback.html',
    controller: 'feedbackCtrl'
  })

  .state('smartAccessibility.reportList', {
    url: '/report_list',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reportList.html',
        controller: 'reportListCtrl'
      }
    }
  })

  .state('smartAccessibility.reviewList', {
    url: '/reviews_list',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reviewList.html',
        controller: 'reviewListCtrl'
      }
    }
  })

  .state('smartAccessibility.navigationMap', {
    url: '/mockmap_nav',
    views: {
      'side-menu21': {
        templateUrl: 'templates/navigationMap.html',
        controller: 'navigationMapCtrl'
      }
    }
  })

  .state('accessibilityMap', {
    url: '/mockmap_acc',
    templateUrl: 'templates/accessibilityMap.html',
    controller: 'accessibilityMapCtrl'
  })

  .state('smartAccessibility.liveTrackingMap', {
    url: '/mockmap_live',
    views: {
      'side-menu21': {
        templateUrl: 'templates/liveTrackingMap.html',
        controller: 'liveTrackingMapCtrl'
      }
    }
  })

  .state('smartAccessibility.vouchersPromotions', {
    url: '/vouchers',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vouchersPromotions.html',
        controller: 'vouchersPromotionsCtrl'
      }
    }
  })

  .state('addVoucherPromotion', {
    url: '/addVoucher',
    templateUrl: 'templates/addVoucherPromotion.html',
    controller: 'addVoucherPromotionCtrl'
  })

$urlRouterProvider.otherwise('/list-menu/map')



});
