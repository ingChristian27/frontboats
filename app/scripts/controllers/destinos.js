/**
 *
 * Destinos
 *
 */

angular
    .module('homer')
    .controller('destinosCtrl', destinosCtrl)



function destinosCtrl($scope, $http, serviceDestino, $modal ) {
   

   // INICIANDO VALORES
    $scope.nombre='';
    $scope.distancia='';
    $scope.descripcion='';
    $scope.valor=0;

    //Cargamos el servidor con las naves existentes
    serviceDestino
        .getAll()
        .then(function(data) {
            $scope.data = data;
        })
        .catch(function(err){

        }) 

     
    $scope.agregar = function(){
       
        //  Creamos el json con los elementos agregar en la nava

        var addDestino = {
            nombre : $scope.nombre,
            distancia : $scope.distancia,
            descripcion : $scope.descripcion,
            valor: $scope.valor
         };
        /* LLamamos al servicio de naves para enviar un json
        *   con los datos agregar al servidor
        *   responde un un nuevo json con el elemento agregado 
        */
        serviceDestino
            .addDestino(addDestino)
            .then(function(data) {
                $scope.data = data;
            })
            .catch(function(err){

            }) 
     
         //  Iniciamos las variables del formulario para presentación.
        $('#modal_user').modal('hide');
        $scope.nombre='';
        $scope.distancia='';
        $scope.descripcion='';

            
    }
    $scope.eliminar =function(text){
    
           for (i=0; i < $scope.naves.length; i++){
                if ($scope.naves[i].nombre === text){
                        $scope.naves.splice(i,1);
                }  
           }
    }
   
}