'use strict'
###
  Password Encoder Application
###
angular.module('twoGuysInDesignApp', ['ui.state'])
  .config ($stateProvider) ->
    $stateProvider.state('index',
      url: ''
      views:
       navbar:
         templateUrl: 'views/site/navbar.html'
       content:
         templateUrl: 'views/content.html'
       footer:
         templateUrl: 'views/site/footer.html'
    )
