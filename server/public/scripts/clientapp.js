var application = angular.module('myApp', []);

application.controller('IndexController', ['$scope', '$http', function($scope, $http) {

$scope.data=[];
$scope.dataInfo=[];

$scope.grabCustomers = function() {
  $http({
    method: 'GET',
    url: '/customers'
  }).then(function(res) {
    $scope.data = res.data;
    console.log(res);
  })
}

$scope.getCustomerInfo = function(id) {
  $http({
    method: 'POST',
    url: '/customerinfo',
    data: {customerId: id}
  }).then(function(res) {
    $scope.dataInfo = res.data;
    console.log(res);
})
}
}]);
