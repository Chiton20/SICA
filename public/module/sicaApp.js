/**
 * Created by magarcia on 19/10/16.
 */
var app = angular.module('sicaApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: './module/view/admnArticulos.html',
            controller: 'admArticulosCtrl'
        })
});

app.controller('admArticulosCtrl',function(postService, $scope, $rootScope){

});