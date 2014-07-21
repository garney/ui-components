
angular.module('uiComponents').directive('uiAlert', function() {
  return {
    restrict: 'E',
    scope: {
      value: '@',
      class: '@',
      strong: '@'
    },
    templateUrl: 'ui-alert.html'
  };
});


angular.module('uiComponents').directive('uiCpf', function() {
  return {
    restrict: 'E',
    scope: {
      id: '@',
      label: '@',
      type: '@',
      placeholder: '@',
      value: '=value'
    },
    controller : function($scope) {
      $scope.$watch('value', function(data){
          $scope.value = (data || '').replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      });
    },
    templateUrl: 'ui-input.html'
  };
});


angular.module('uiComponents').directive('uiKnob', function() {
  return {
    restrict: 'E',
    scope: {
      id: '@',
      readonly: '@',
      min: '@',
      max: '@',
      value: "=value"
    },
    controller: function($scope, $element, $timeout) {

      $timeout(function() {
        $('#' + $scope.id).find('.knob').knob();
      });

      $scope.$watch('value', function(value) {
        debugger;
        var el = $($element).find('.knob');
        el.val(value).trigger('change');
      });
    },
    templateUrl: 'ui-knob.html'
  };
});


angular.module('uiComponents').directive('uiKnobPercentage', function() {
  return {
    restrict: 'E',
    scope: {
      id: '@',
      readonly: '@',
      min: '@',
      max: '@',
      value: "=value"
    },
    controller: function($scope, $timeout) {
      $timeout(function() {
        $('#' + $scope.id).find('.knob').knob({
          'draw': function() {
            $(this.i).val(this.cv + '%')
          }
        });
      });
    },
    templateUrl: 'ui-knob.html'
  };
});

angular.module('uiComponents').directive('uiSpark', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      id: '@',
      message: '@',
      class: '@',
      value: '@',
      bind: '=bind'
    },
    controller: function($scope, $timeout) {
      $scope.sparkline = function(data) {
        var $sparkline = $('#' + $scope.id);
        $sparkline.find('.sparkline').each(function() {
          $(this).sparkline(data, {
            type: 'line',
            lineWidth: 1,
            highlightSpotColor: null,
            highlightLineColor: null,
            maxSpotColor: null,
            minSpotColor: null,
            disableHiddenCheck: true,
            spotColor: null,
            lineColor: 'rgba(255, 255, 255, .10);',
            fillColor: 'rgba(255, 255, 255, .10);',
            height: $sparkline.parent().outerHeight() - 20,
            width: $sparkline.parent().outerWidth() - 35
          });

        });

        //$timeout(function() {
        //  $scope.sparkline();
        //}, 500);
      };



      $scope.$watch('bind', function(data) {
          $timeout(function() {
            $scope.$apply(function(){
              debugger;
              $scope.sparkline(data);
            })
          }, 500);
      });
    },
    templateUrl: 'ui-spark.html'
  };
});

angular.module('uiComponents').directive('uiTable', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      cols: '=cols',
      vals: '=vals',
      data: '=bind',
      width: '=width'
    },
    controller: function($scope) {
      $scope.maxOfPage = ['05', '10', '20'];
      $scope.pagCount = '05';
      $scope.$watch('pagCount', function() {
        $scope.pagIndex = 0;
      });
      $scope.sortBy = $scope.vals[0];
      $scope.asc = false;
      $scope.setSortBy = function(sortBy) {
        if ($scope.sortBy === sortBy) {
          $scope.asc = !$scope.asc;
        } else {
          $scope.asc = false;
        }
        $scope.sortBy = sortBy;
      };
    },
    templateUrl: 'ui-table.html'
  };
});



angular.module('uiComponents').filter('paginator', function() {
  return function(a, b) {
    if (a === null || a.length === 0)
      return a;
    var vA = [];
    var vL = [];
    $.each(a, function() {
      vA.push(this);
      if (vA.length == (b === null ? 5 : b)) {
        vL.push(vA);
        vA = [];
      }
    })
    if (vA.length > 0)
      vL.push(vA);
    return vL;
  };
});