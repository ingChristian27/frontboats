
/**
 *
 * Estudiante
 *
 */

angular
    .module('homer')
    .controller('motorCtrl', motorCtrl)

function motorCtrl($scope, $http, serviceMotor ) {


  $http.get("api/reservas.json")
    .then(function(response) {
        $scope.reservas  = response.data;
    });
    $scope.fecha = new Date();
    $scope.cant_adultos ='';

    $scope.buscarViaje =function(){
        console.log("entro");
         var criterioBusqueda = {
              fecha : $scope.fecha,
              cant_adultos : $scope.cant_adultos
         };

            serviceMotor
                    .getAll(criterioBusqueda)
                    .then(function(data) {
                        $scope.busqueda = data;
                    })
                    .catch(function(err){
            }) 
    }

}
