angular.module('uiComponents.todo', []);
(function (module) {
  try {
    module = angular.module('ui-components-templates');
  } catch (e) {
    module = angular.module('ui-components-templates', []);
  }
  module.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('/ui-components/alert.html', '<div class="panel panel-default"><div class="panel-heading">ng-alert</div><div class="panel-body"><pre>\n' + '      &lt;div class="alert alert-warning alert-dismissable"&gt; \n' + '        &lt;button type="button" class="close" data-dismiss="alert" aria-hidden="true"&gt;&times;&lt;/button&gt;\n' + '        &lt;strong&gt;Warning!&lt;/strong&gt; Best check yo self, you\'re not looking too good.\n' + '      &lt;/div&gt;\n' + '    </pre><hr><div class="alert alert-warning alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times</button> <strong>Warning!</strong> Best check yo self, you\'re not looking too good.</div><hr><pre>\n' + '      &lt;data-ui-alert class="warning"\n' + '                   strong="Warning!"\n' + '                   value="Best check yo self, you\'re not looking too good."&gt;\n' + '      &lt;/data-ui-alert&gt;\n' + '    </pre><hr><data-ui-alert class="warning" strong="Warning!" value="Best check yo self, you\'re not looking too good."></data-ui-alert><data-ui-alert class="success" strong="Success!" value="Best check yo self, you\'re not looking too good."></data-ui-alert><data-ui-alert class="info" strong="Info!" value="Best check yo self, you\'re not looking too good."></data-ui-alert><data-ui-alert class="danger" strong="Danger!" value="Best check yo self, you\'re not looking too good."></data-ui-alert><hr></div></div>');
    }
  ]);
}());
(function (module) {
  try {
    module = angular.module('ui-components-templates');
  } catch (e) {
    module = angular.module('ui-components-templates', []);
  }
  module.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('/ui-components/input.html', '<div class="panel panel-default"><div class="panel-heading">ng-input</div><div class="panel-body"><data-ui-cpf label="CPF do estudante" value="estudante.nrCpf" placeholder="Informe o CPF, somete numeros"></data-ui-cpf></div></div>');
    }
  ]);
}());
(function (module) {
  try {
    module = angular.module('ui-components-templates');
  } catch (e) {
    module = angular.module('ui-components-templates', []);
  }
  module.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('/ui-components/knob.html', '<div class="row"><div class="col-md-12"><data-ui-input label="Valor do knob" value="knob" type="number" placeholder="Informe o valor"></data-ui-input></div></div><div class="row"><div class="col-md-6"><data-ui-knob id="knob" data-value="knob" data-min="30" data-max="300" readonly></data-ui-knob></div><div class="col-md-6"><data-ui-knob-percentage id="percentage" data-value="knob" data-min="30" data-max="300" readonly></data-ui-knob-percentage></div></div>');
    }
  ]);
}());
(function (module) {
  try {
    module = angular.module('ui-components-templates');
  } catch (e) {
    module = angular.module('ui-components-templates', []);
  }
  module.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('/ui-components/menu.html', '<ul class="nav nav-stacked"><li class="active" ng-class="{active: view == \'alert.html\'}"><a href="#" ng-click="setView(\'alert.html\')"><span class="glyphicon glyphicon-chevron-right"></span> Alert</a></li><li ng-class="{active: view == \'input.html\'}"><a href="#" ng-click="setView(\'input.html\')"><span class="glyphicon glyphicon-chevron-right"></span> Input</a></li><li ng-class="{active: view == \'table.html\'}"><a href="#" ng-click="setView(\'table.html\')"><span class="glyphicon glyphicon-chevron-right"></span> Table</a></li><li ng-class="{active: view == \'spark.html\'}"><a href="#" ng-click="setView(\'spark.html\')"><span class="glyphicon glyphicon-chevron-right"></span> Spark</a></li><li ng-class="{active: view == \'knob.html\'}"><a href="#" ng-click="setView(\'knob.html\')"><span class="glyphicon glyphicon-chevron-right"></span> Knob</a></li></ul>');
    }
  ]);
}());
(function (module) {
  try {
    module = angular.module('ui-components-templates');
  } catch (e) {
    module = angular.module('ui-components-templates', []);
  }
  module.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('/ui-components/spark.html', '<div class="row"><div class="col-md-12"><data-ui-input label="Adicionar valor no data" value="dataItem" type="number" placeholder="Adicionar a Range do Grafico"></data-ui-input>{{dataItem}}</div></div><div class="row"><div class="col-md-12"><button data-ng-click="addToMyData(dataItem)" class="btn btn-default">Adicionar</button></div></div><div class="row"><div class="col-md-3"><data-ui-spark id="success" data-class="btn-success" data-message="success" data-bind="data" data-value="150"></data-ui-spark></div></div>');
    }
  ]);
}());
(function (module) {
  try {
    module = angular.module('ui-components-templates');
  } catch (e) {
    module = angular.module('ui-components-templates', []);
  }
  module.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('/ui-components/table.html', '<div class="panel panel-default"><div class="panel-heading">ng-table</div><div class="panel-body"><pre>\n' + '     &lt;table class="table table-striped table-hover"&gt;\n' + '      &lt;thead&gt;\n' + '    \t&lt;tr&gt;\n' + '    \t  &lt;th&gt;#&lt;/th&gt;\n' + '    \t  &lt;th&gt;EMAIL&lt;/th&gt;\n' + '    \t  &lt;th&gt;NAME&lt;/th&gt;\n' + '    \t&lt;/tr&gt;  \n' + '      &lt;/thead&gt;\n' + '      &lt;tbody&gt;\n' + '    \t&lt;tr ng-repeat="c in contacts"&gt;\n' + '    \t  &lt;td&gt;{ {c.code} }&lt;/td&gt;\n' + '    \t  &lt;td&gt;{ {c.email} }&lt;/td&gt;\n' + '    \t  &lt;td&gt;{ {c.name} }&lt;/td&gt;\n' + '    \t&lt;/tr&gt;  \n' + '      &lt;/tbody&gt; \n' + '     &lt;/table&gt;  \n' + '    </pre><hr><table class="table table-striped table-hover"><thead><tr><th>#</th><th>EMAIL</th><th>NAME</th></tr></thead><tbody><tr ng-repeat="c in contacts"><td>{{c.code}}</td><td>{{c.email}}</td><td>{{c.name}}</td></tr></tbody></table><hr><pre>\n' + '      &lt;data-ui-table data-bind="contacts" \n' + '                     data-cols="[\'#\',\'EMAIL\',\'NAME\']"\n' + '                     data-vals="[\'code\',\'email\',\'name\']"&gt;\n' + '                      &lt;span class="glyphicon glyphicon-user"&lt;&gt;/span&gt; Alunos\n' + '      &lt;/data-ui-table&gt;\n' + '    </pre><hr><data-ui-table data-bind="contacts" data-cols="[\'#\',\'EMAIL\',\'NAME\']" data-vals="[\'code\',\'email\',\'name\']"><span class="glyphicon glyphicon-user"></span> Alunos</data-ui-table></div></div>');
    }
  ]);
}());
(function (module) {
  try {
    module = angular.module('ui-components-templates');
  } catch (e) {
    module = angular.module('ui-components-templates', []);
  }
  module.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('/ui-components/ui-alert.html', '<div class="alert alert-{{class}}"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times</button> <strong>{{strong}}</strong> {{value}}</div>');
    }
  ]);
}());
(function (module) {
  try {
    module = angular.module('ui-components-templates');
  } catch (e) {
    module = angular.module('ui-components-templates', []);
  }
  module.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('/ui-components/ui-input.html', '<div class="form-group"><label for="{{id}}" data-ng-bind="label"></label><input id="{{id}}" maxlength="14" type="{{type}}" placeholder="{{placeholder}}" data-ng-model="value" class="form-control"></div>');
    }
  ]);
}());
(function (module) {
  try {
    module = angular.module('ui-components-templates');
  } catch (e) {
    module = angular.module('ui-components-templates', []);
  }
  module.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('/ui-components/ui-knob.html', '<input class="knob" data-readonly="{{readonly}}" data-ng-model="value" data-min="{{min}}" data-max="{{max}}">');
    }
  ]);
}());
(function (module) {
  try {
    module = angular.module('ui-components-templates');
  } catch (e) {
    module = angular.module('ui-components-templates', []);
  }
  module.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('/ui-components/ui-spark.html', '<div class="dash-panel {{class}}"><div class="sparkline"></div><div class="title"><span data-ng-bind="message"></span></div><div class="value" data-ng-bind="value"></div></div>');
    }
  ]);
}());
(function (module) {
  try {
    module = angular.module('ui-components-templates');
  } catch (e) {
    module = angular.module('ui-components-templates', []);
  }
  module.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('/ui-components/ui-table.html', '<div class="panel panel-default"><div class="panel-heading" data-ng-transclude></div><div class="panel-body"><table class="table table-striped table-hover"><colgroup><col class="{{width}}" data-ng-repeat="width in width"></colgroup><thead><th data-ng-repeat="c in cols" style="cursor: pointer"><div data-ng-click="setSortBy(vals[$index])"><span data-ng-bind="c"></span> <span style="float: right" data-ng-class="{\'glyphicon glyphicon-chevron-up\': !$parent.asc, \'glyphicon glyphicon-chevron-down\': $parent.asc, \'font-invisible\' : $parent.sortBy != vals[$index]}"></span></div></th></thead><tbody><tr data-ng-repeat="d in (data|filter:filter|orderBy:sortBy:asc|paginator:pagCount)[pagIndex]"><td data-ng-repeat="v in vals" data-ng-bind="d[v]"></td></tr></tbody></table></div><div class="panel-footer"><div class="row"><div class="col-md-12"><ul class="pagination center"><li><a ng-click="pagIndex = 0">&laquo;</a> {{$first}}</li><li ng-repeat="d in (data|filter:filter|orderBy:sortBy:asc|paginator:pagCount)" ng-class="{active: pagIndex == $index}"><a ng-click="$parent.pagIndex = $index">{{$index + 1}}</a></li><li><a ng-click="pagIndex = ((data|filter:filter|orderBy:sortBy:asc|paginator:pagCount).length - 1)">&raquo;</a> {{$last}}</li></ul><select class="form-control" data-ng-model="pagCount" data-ng-options="c for c in maxOfPage " style="width: 80px; float: right"></select></div></div></div></div>');
    }
  ]);
}());
(function (module) {
  try {
    module = angular.module('ui-components-templates');
  } catch (e) {
    module = angular.module('ui-components-templates', []);
  }
  module.run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('/ui-components/todo/todo.html', '<h3>Todo</h3><ul class="todo-list"><li class="todo-item" ng-repeat="todo in todos" ng-class="{\'todo-done\': todo.isDone}"><label><input type="checkbox" ng-click="check()" ng-model="todo.isDone">&nbsp;{{todo.label}}</label></li><li class="todo-item"><form ng-submit="add()"><input placeholder="New item..." ng-model="label"> <button type="submit" ng-disabled="posting || !label">Add</button></form></li></ul><div class="row"><div class="col-md-12"><data-ui-input label="Valor do knob" value="knob" type="number" placeholder="Informe o valor"></data-ui-input></div></div><div class="row"><div class="col-md-6"><data-ui-knob id="knob" data-value="knob" data-min="30" data-max="300" readonly></data-ui-knob></div><div class="col-md-6"><data-ui-knob-percentage id="percentage" data-value="knob" data-min="30" data-max="300" readonly></data-ui-knob-percentage></div></div><div class="container-fluid"><div class="row"><div class="col-md-2" ng-include="\'menu.html\'"></div><div class="col-md-10" ng-include="view"></div></div></div>');
    }
  ]);
}());
angular.module('uiComponents', [
  'ngRoute',
  'uiComponents.todo',
  'ui-components-templates'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    'use strict';
    $routeProvider.when('/todo', {
      controller: 'menu',
      templateUrl: '/ui-components/todo/todo.html'
    }).otherwise({ redirectTo: '/todo' });
  }
]).controller('menu', [
  '$scope',
  function ($scope) {
    $scope.setView = function (view) {
      $scope.view = view;
    };
    $scope.contacts = [
      {
        code: 1,
        email: 'losfueras@gmail.com',
        name: 'Carlos H. Nonnemacher'
      },
      {
        code: 2,
        email: 'c_h_n@gmail.com',
        name: 'Carlos Nonnemacher'
      }
    ];
    $scope.data = [
      10,
      8,
      4,
      3,
      5,
      6,
      3.99
    ];
    //    $scope.setView('input.html');
    $scope.addToMyData = function (item) {
      $scope.data.push(item);
      $scope.$apply();
    };
    $scope.knob = 99;
  }
]);
angular.module('uiComponents.todo').controller('TodoCtrl', [
  '$scope',
  '$window',
  function ($scope, $window) {
    'use strict';
    $scope.todos = JSON.parse($window.localStorage.getItem('todos') || '[]');
    $scope.$watch('todos', function (newTodos, oldTodos) {
      if (newTodos !== oldTodos) {
        $window.localStorage.setItem('todos', JSON.stringify(angular.copy($scope.todos)));
      }
    }, true);
    $scope.add = function () {
      var todo = {
          label: $scope.label,
          isDone: false
        };
      $scope.todos.push(todo);
      $window.localStorage.setItem('todos', JSON.stringify(angular.copy($scope.todos)));
      $scope.label = '';
    };
    $scope.check = function () {
      this.todo.isDone = !this.todo.isDone;
    };
  }
]);
angular.module('uiComponents').directive('uiAlert', function () {
  return {
    restrict: 'E',
    scope: {
      value: '@',
      class: '@',
      strong: '@'
    },
    templateUrl: '/ui-components/ui-alert.html'
  };
});
angular.module('uiComponents').directive('uiCpf', function () {
  return {
    restrict: 'E',
    scope: {
      id: '@',
      label: '@',
      type: '@',
      placeholder: '@',
      value: '=value'
    },
    controller: [
      '$scope',
      function ($scope) {
        $scope.$watch('value', function (data) {
          $scope.value = (data || '').replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        });
      }
    ],
    templateUrl: '/ui-components/ui-input.html'
  };
});
angular.module('uiComponents').directive('uiKnob', function () {
  return {
    restrict: 'E',
    scope: {
      id: '@',
      readonly: '@',
      min: '@',
      max: '@',
      value: '=value'
    },
    controller: [
      '$scope',
      '$element',
      '$timeout',
      function ($scope, $element, $timeout) {
        $timeout(function () {
          $('#' + $scope.id).find('.knob').knob();
        });
        $scope.$watch('value', function (value) {
          var el = $($element).find('.knob');
          el.val(value).trigger('change');
        });
      }
    ],
    templateUrl: '/ui-components/ui-knob.html'
  };
});
angular.module('uiComponents').directive('uiKnobPercentage', function () {
  return {
    restrict: 'E',
    scope: {
      id: '@',
      readonly: '@',
      min: '@',
      max: '@',
      value: '=value'
    },
    controller: [
      '$scope',
      '$timeout',
      function ($scope, $timeout) {
        $timeout(function () {
          $('#' + $scope.id).find('.knob').knob({
            'draw': function () {
              $(this.i).val(this.cv + '%');
            }
          });
        });
      }
    ],
    templateUrl: '/ui-components/ui-knob.html'
  };
});
angular.module('uiComponents').directive('uiSpark', function () {
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
    controller: [
      '$scope',
      '$timeout',
      function ($scope, $timeout) {
        $scope.sparkline = function (data) {
          var $sparkline = $('#' + $scope.id);
          $sparkline.find('.sparkline').each(function () {
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
          });  //$timeout(function() {
               //  $scope.sparkline();
               //}, 500);
        };
        $scope.$watch('bind', function (data) {
          $timeout(function () {
            $scope.$apply(function () {
              $scope.sparkline(data);
            });
          }, 500);
        });
      }
    ],
    templateUrl: '/ui-components/ui-spark.html'
  };
});
angular.module('uiComponents').directive('uiTable', function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      cols: '=cols',
      vals: '=vals',
      data: '=bind',
      width: '=width'
    },
    controller: [
      '$scope',
      function ($scope) {
        $scope.maxOfPage = [
          '05',
          '10',
          '20'
        ];
        $scope.pagCount = '05';
        $scope.$watch('pagCount', function () {
          $scope.pagIndex = 0;
        });
        $scope.sortBy = $scope.vals[0];
        $scope.asc = false;
        $scope.setSortBy = function (sortBy) {
          if ($scope.sortBy === sortBy) {
            $scope.asc = !$scope.asc;
          } else {
            $scope.asc = false;
          }
          $scope.sortBy = sortBy;
        };
      }
    ],
    templateUrl: '/ui-components/ui-table.html'
  };
});
angular.module('uiComponents').filter('paginator', function () {
  return function (a, b) {
    if (a === null || a.length === 0)
      return a;
    var vA = [];
    var vL = [];
    $.each(a, function () {
      vA.push(this);
      if (vA.length == (b === null ? 5 : b)) {
        vL.push(vA);
        vA = [];
      }
    });
    if (vA.length > 0)
      vL.push(vA);
    return vL;
  };
});