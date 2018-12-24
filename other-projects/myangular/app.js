var app = angular.module('myApp', ['ngRoute']);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/add-quote', {
            templateUrl: 'views/add_quote.html',
            controller: 'QuoteCtrl'
        })
        .otherwise({ redirectTo: '/' });
}]);