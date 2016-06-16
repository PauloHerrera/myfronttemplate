app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', { templateUrl: 'views/home.html' });
    $routeProvider.when('/list', { templateUrl: 'views/list.html' });
});
