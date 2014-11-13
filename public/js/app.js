/**
 * Created by akozlovskiy on 11/12/2014.
 */
var app = angular.module('app', [
    'ngRoute',
    'controllers',
    'directives',
    'services'
]);
//app.config(['$routeProvider',
//    function($routeProvider) {
//        $routeProvider.
//            when('/', {
//                templateUrl: 'index.html'
//            }).
//            otherwise({
//                redirectTo: '/'
//            });
//    }])