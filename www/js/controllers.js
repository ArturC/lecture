angular.module('calculator.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('MainCtrl', ['$scope', function($scope){
  $scope.message = 'hello';
  $scope.display = 0;
  var operator = 0;
  var memory = [];
  var operand = 0;

  $scope.numbers = function (x) {
    memory.push(x);
    $scope.display = memory.join('') * 1;
  }
  $scope.operation = function (x) {
    operand = $scope.display;
    memory = [];
    operator = x;
  }

  $scope.clear = function () {
    $scope.display = 0;
    operand = 0;
    memory = [];
  }
  $scope.equals = function () {
    if (operator === 1) {
      $scope.display += operand;
    } else if (operator === 2) {
      $scope.display = operand - $scope.display;
    } else if (operator === 3) {
      $scope.display *= operand;
    } else if (operator === 4) {
      $scope.display = operand / $scope.display;
    }
  }

  $scope.squared = function () {
    $scope.display *= $scope.display;
  }
  $scope.squareRoot = function () {
    $scope.display = Math.sqrt($scope.display);
  }

  $scope.sine = function () {
    $scope.display = Math.sin($scope.display);
  }
  $scope.cosine = function () {
    $scope.display = Math.cos($scope.display);
  }
  $scope.tangent = function () {
    $scope.display = Math.tan($scope.display);
  }
  $scope.arcsine = function () {
    $scope.display = Math.asin($scope.display);
  }
  $scope.arccosine = function () {
    $scope.display = Math.acos($scope.display);
  }
  $scope.arctangent = function () {
    $scope.display = Math.atan($scope.display);
  }

}]);

