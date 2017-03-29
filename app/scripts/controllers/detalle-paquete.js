/**
 *
 * Destinos
 *
 */

angular
    .module('homer')
    .controller('detallePaqueteCtrl', detallePaqueteCtrl)



function detallePaqueteCtrl($scope, $http, serviceDestino, $modal ,FileUploader, $stateParams, $state) {

    if ($stateParams.rutaId) 
            $scope.destinoId = $stateParams.rutaId;

     serviceDestino
                .obtenerPaquete($scope.destinoId  )
                .then(function (data) {
                    console.log(data);
                    $scope.cargador = false;
                    $scope.data = data.paquete[0];
                })
                .catch(function (err) {});

    //*****************************************
     var uploader = $scope.uploader = new FileUploader({
            url: 'http://localhost:5000/paquete/imagenes'
        });

        // FILTERS

        uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });
        // CALLBACKS

        
    uploader.onBeforeUploadItem = function(item) 
    {
        console.log("hola mmundo")
        var data ={}
        data.id = $scope.destinoId;
        data.activo = true;
        console.log(data)
        item.formData.push(data);
    };
  
    $scope.eliminar =function(id)
    {

        serviceDestino
            .EliminarPaquete(id)
            .then(function(responseId) {
                for (i=0; i < $scope.data.length; i++){
                    if ($scope.data[i]._id === responseId){
                        $scope.data.splice(i,1);
                    } 
                }
            })
            .catch(function(err){

            })        
    }
   
}