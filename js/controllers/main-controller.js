app.controller('mainController', function($scope, firstService) {
  $scope.club = firstService.first();
});
