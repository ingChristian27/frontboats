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

    //Cargamos el servidor con las naves existentes
    serviceDestino
        .getAll()
        .then(function(data) {
            $scope.test = data;
        })
        .catch(function(err){

        }) 

     
    $scope.agregar = function(){
       
        //  Creamos el json con los elementos agregar en la nava

        var addDestino = {
            nombre : $scope.nombre,
            distancia : $scope.distancia,
            descripcion : $scope.descripcion
         };
        /* LLamamos al servicio de naves para enviar un json
        *   con los datos agregar al servidor
        *   responde un un nuevo json con el elemento agregado 
        */
        serviceDestino
            .addDestino(addDestino)
            .then(function(data) {
                $scope.test = data;
            })
            .catch(function(err){

            }) 
        
         //  Iniciamos las variables del formulario para presentación.
        $('#modal_user').modal('hide');
        $scope.nombre='';
        $scope.distancia='';
        $scope.descripcion='';

            
    }
    $scope.detalleNave =function(text){
        $scope.nave = [];
        for (i=0; i < $scope.test.naves.length; i++)
                if ($scope.test.naves[i].nombre === text)
                        $scope.nave.push($scope.test.naves[i]); 
           
    }
    $scope.buscar_ruta =function(text){
         
           for (i=0; i < $scope.rutas.length; i++)
                if ($scope.rutas[i].nombre === text)
                    return [{nombre: $scope.rutas[i].nombre, origen: $scope.rutas[i].origen, destino: $scope.rutas[i].destino }];       
    }
       

    $scope.eliminar =function(text){
    
           for (i=0; i < $scope.naves.length; i++){
                if ($scope.naves[i].nombre === text){
                        $scope.naves.splice(i,1);
                }  
           }
    }
    $scope.ok = function(){
        console.log("hola mundo");
    }

}
function ModalInstanceCtrl ($scope, $modalInstance, serviceNave) {
  // INICIANDO VALORES
    $scope.nombre='';
    $scope.modelo='';
    $scope.color='';
    $scope.tipo ='';
    $scope.cant_motores =0;
    $scope.potencia ='';
    $scope.marca ='';
    $scope.eslora ='';
    $scope.combustible ='';
    $scope.matricula ='';
    $scope.pax =0;
    $scope.chalecos =0;
    $scope.radio_vhf =0;
    $scope.nevera =0;
    $scope.carpa ='';
    $scope.sonido ='';
    $scope.piloto ='';
    $scope.licencia_piloto ='';
    $scope.copiloto ='';
    $scope.licencia_copiloto ='';
    $scope.descripcion ='';
    $scope.ok = function () {

        //  Creamos el json con los elementos agregar en la nava
        var addnave = {
            nombre : $scope.nombre,
            modelo : $scope.modelo,
            color : $scope.color,
            tipo : $scope.tipo,
            cant_motores : $scope.cant_motores,
            potencia : $scope.potencia,
            marca : $scope.marca,
            eslora : $scope.eslora,
            combustible : $scope.combustible,
            matricula : $scope.matricula,
            pax : $scope.pax,
            chalecos : $scope.chalecos,
            radio_vhf : $scope.radio_vhf,
            nevera : $scope.nevera,
            carpa : $scope.carpa,
            sonido : $scope.sonido,
            piloto : $scope.piloto,
            licencia_piloto : $scope.licencia_piloto,
            copiloto : $scope.copiloto,
            licencia_copiloto : $scope.licencia_copiloto,
            descripcion : $scope.descripcion
         };

        /* LLamamos al servicio de naves para enviar un json
        *   con los datos agregar al servidor
        *   responde un un nuevo json con el elemento agregado 
        */
        serviceNave
            .addNave(addnave)
            .then(function(data) {
                $scope.test = data;
            })
            .catch(function(err){

            }) 
        
         //  Iniciamos las variables del formulario para presentación.
        
        $modalInstance.close();

        $scope.nombre='';
        $scope.modelo='';
        $scope.color='';
        $scope.tipo ='';
        $scope.cant_motores =0;
        $scope.potencia ='';
        $scope.marca ='';
        $scope.eslora ='';
        $scope.combustible ='';
        $scope.matricula ='';
        $scope.pax =0;
        $scope.chalecos =0;
        $scope.radio_vhf =0;
        $scope.nevera =0;
        $scope.carpa ='';
        $scope.sonido ='';
        $scope.piloto ='';
        $scope.licencia_piloto ='';
        $scope.copiloto ='';
        $scope.licencia_copiloto ='';
        $scope.descripcion ='';
        
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};



