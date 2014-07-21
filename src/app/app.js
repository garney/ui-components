
angular.module('uiComponents', [
  'ngRoute',
  'uiComponents.todo',
  'ui-components-templates'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'menu',
      templateUrl: '/ui-components/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
})


.controller('menu', function($scope) {
    $scope.setView = function(view) {
        $scope.view = view;
    };

    $scope.contacts = [{
        code: 1,
        email: 'losfueras@gmail.com',
        name: 'Carlos H. Nonnemacher'
    }, {
        code: 2,
        email: 'c_h_n@gmail.com',
        name: 'Carlos Nonnemacher'
    }]

    $scope.data = [10, 8, 4, 3, 5, 6, 3.99];

//    $scope.setView('input.html');

    $scope.addToMyData = function(item) {
        $scope.data.push(item);
        $scope.$apply();
    };

    $scope.knob = 99;

});