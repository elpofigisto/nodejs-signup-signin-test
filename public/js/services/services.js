/**
 * Created by akozlovskiy on 11/12/2014.
 */
var services = angular.module('services', [])

//services.factory('signUp', function($http))


services.factory('signUp', function($http) {
    return {
        signUpUser: function(userData) {
            //return the promise directly.
            return $http({
                url : '/api/signup',
                method: 'POST',
                data: userData
            })

        },
        signInUser: function(usersi) {
            //return the promise directly.
            return $http({
                url : '/api/signin',
                method: 'POST',
                data: usersi
            })

        }
    }
});