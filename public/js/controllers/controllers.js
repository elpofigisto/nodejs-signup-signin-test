/**
 * Created by akozlovskiy on 11/12/2014.
 */
var controllers = angular.module('controllers', []);

controllers.controller('userSignIn', ['$scope', '$http', 'signUp', function($scope, $http, signUp){
    $scope.signUpUser = function(userData) {
    signUp.signUpUser(userData).then(function(data) {
        console.log(data.data);
        $scope.signUpStatus = data.data.success;
        //$scope.foos = data;
    });
    };

    $scope.signInUser = function(usersi) {
        signUp.signInUser(usersi).then(function(data) {
            console.log(data.data);
            $scope.signInStatus = data.data.signin;
            console.log($scope.signInStatus);
            //$scope.foos = data;
        });
    }

}])