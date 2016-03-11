
/**
 *
 * Estudiante
 *
 */

angular
    .module('homer')
    .controller('reservasCtrl', reservasCtrl)

function reservasCtrl($scope, $http ) {


  $http.get("api/reservas.json")
    .then(function(response) {
        $scope.reservas  = response.data;
    });

   
$scope.ver_agregar = false;

$scope.bus = [];


       
        $scope.verAgregar = function(){
            if($scope.ver_agregar === false)
                $scope.ver_agregar = true
            else
                $scope.ver_agregar = false
        }
        $scope.agregar = function(){
            $scope.viajes.push({
                empresa_transporte: $scope.empresa_transporte,
                destino: $scope.destino,
                capacidad: $scope.capacidad,
                estado: $scope.estado,
                
            });
            
            $('#modal_user').modal('hide');
            $scope.empresa_transporte='';
            $scope.destino='';
            $scope.estado='';
            
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
