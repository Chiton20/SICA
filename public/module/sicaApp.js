/**
 * Created by magarcia on 19/10/16.
 */
var app = angular.module('sicaApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/articulos',{
            templateUrl: './module/view/admnArticulos.html',
            controller: 'articulosCtrl'
        })
        .when('/articulo/:tipo',{
            templateUrl: './module/view/articulo.html',
            controller: 'articuloCtrl'
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
});

app.controller('articuloCtrl',function($scope,$rootScope,$routeParams){
    $scope.articulo = $routeParams.tipo;

    if($scope.articulo != 0){
        $scope.tipoMaterial = {id:1};
        $scope.nombre = "Voltaren Retard";
        $scope.sal = "Diclofenaco";
        $scope.tipo = 1;
        $scope.presentacion = "Grajeas";
        $scope.noSAP = 100000001;
        $scope.subTipo = "Cox no selectivo";
        $scope.codigoBarra = "1235468961"
    }

    $scope.tipoMaterial = $scope.tipoMaterial[1];
});