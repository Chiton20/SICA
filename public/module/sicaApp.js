/**
 * Created by magarcia on 19/10/16.
 */
var app = angular.module('sicaApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: './module/view/admnArticulos.html',
            controller: 'articulosCtrl'
        })
});

app.controller('articulosCtrl',function($scope, $rootScope){
    $scope.articulos = [];

    function cargaArticulos(){
        for(var i = 1; i <= 10;i++){
            $scope.articulos.push({
                id: i,
                img: './images/articulos/img_no_disponible.gif',
                descripcion: 'Voltaren Retard',
                sal: 'Diclofenaco',
                tipo: 'Antiinflamatorio',
                subTipo: 'Cox No Selectivo',
                presentacion: 'Grajeas',
                disponible: 100
            })
        }
    }

    cargaArticulos();
    console.log("aqui ta!!")
});