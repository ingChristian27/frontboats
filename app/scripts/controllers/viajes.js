/**
 *
 * Estudiante
 *
 */

angular
    .module('homer')
    .controller('viajesCtrl', viajesCtrl)

function viajesCtrl($scope, $http, serviceViaje, serviceNave, $modal ) {

    //Cargamos el servidor con las naves existentes
    serviceViaje
        .getAll()
        .then(function(data) {
            $scope.data = data;
        })
        .catch(function(err){}) 
    $scope.fecha =new Date();
    $scope.capacidad =0;
    $scope.condigo_nave = '';
    $scope.destino = '';
    // Agregar viaje
    $scope.agregarViaje = function(){
        var addviaje = {
              fecha : $scope.fecha,
              capacidad : $scope.capacidad,
              condigo_nave : $scope.condigo_nave,
              codigo_destino : $scope.destino
         };


        serviceViaje
          .addViaje(addviaje)
          .then(function(data) {
              $scope.data = data;
          })
          .catch(function(err){}) 

        $('#agregar_viaje').modal('hide');
        $scope.fecha =new Date();
        $scope.capacidad =0;
        $scope.condigo_nave = '';
        $scope.destino = '';
    }
        $scope.verAgregar = function(){
            if($scope.ver_agregar === false)
                $scope.ver_agregar = true
            else
                $scope.ver_agregar = false
        }
        
        $scope.detalleBus =function(text){
           
            for (i=0; i < $scope.viajes.length; i++)
                    if ($scope.viajes[i].codigo === text)
                            $scope.viaje =$scope.viajes[i];      
               
        }
        $scope.buscar_ruta =function(text){
             
               for (i=0; i < $scope.viajes.length; i++)
                    if ($scope.viajes[i].codigo === text)
                        return [{codigo: $scope.viajes[i].codigo, origen: $scope.viajes[i].origen, destino: $scope.viajes[i].destino }];       
        }
        $scope.eliminar =function(text){
        
               for (i=0; i < $scope.viajes.length; i++){
                    if ($scope.viajes[i].codigo === text){
                            $scope.viajes.splice(i,1);
                    }  
               }
        }
        $scope.cambiausuario = function(usuario){

            $scope.usuario = usuario;
            $scope.usuarios = null;
            
        }
     


}
