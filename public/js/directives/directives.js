/**
 * Created by akozlovskiy on 11/12/2014.
 */
var directives = angular.module('directives', [])

directives.directive('mainHeader', function(){
    return {
        restrict : 'E',
        templateUrl: "../../views/mainHeader.html"
    }
})
directives.directive('signUp', function(){
    return {
        restrict : 'E',
        templateUrl: "../../views/partials/signup.html",
        controller: 'userSignIn'
    }
})