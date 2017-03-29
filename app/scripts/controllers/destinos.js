/**
 *
 * Destinos
 *
 */

angular
    .module('homer')
    .controller('paqueteCtrl', paqueteCtrl)



function paqueteCtrl($scope, $http, serviceDestino, $modal ,FileUploader ) {
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

            data = {}
            data.id="123456";
            data.orden ="1";
            data.activo = true;
            data.principal = false;
            console.log($scope.data)
            item.formData.push($scope.data);
        };
        $scope.enviarArchivo = function(){
            var file = $("#filechooser")[0].files[0];
            var formData = new FormData();
            formData.append("fileToUpload", file);
            console.log(file);

            $.ajax({
               url: "http://localhost:5000/paquete/imagenes",
               type: "POST",
               data: formData,
               processData: false,
               contentType: false,
               mimeType: 'multipart/form-data',
               success: function(response) {
                   // .. do something
               },
               error: function(jqXHR, textStatus, errorMessage) {
                   console.log(errorMessage); // Optional
               }
            });
            
            /*
            /*data = {}
            data.id="123456";
            data.orden ="1";
            data.activo = true;
            data.principal = false;
            data.imagen = $scope.file;
          
            serviceDestino
                .agregarImagenes(data)
                 .then(function (data) {
                    console.log(data);
                   
                })
                .catch(function (err) {});
          */
        }

        console.info('uploader', uploader);
    //*****************************************

   // Tabla paginación
    $scope.table_users = [];
    $scope.pagina = 0;
    $scope.total_count = 0;
    $scope.table_itemsPerPage = 10;
    // Fin paginación


    $scope.getData = function (pagina) {
        
        $scope.cargador = true;
        serviceDestino
                .ObtenerPaquetesPaginados(pagina)
                .then(function (data) {
                    console.log(data);
                    $scope.cargador = false;
                    $scope.total_count = data.totalPaquetes;
                    $scope.table_users = data.users;
                    $scope.data = data.paquetes;
                })
                .catch(function (err) {});
    }

    $scope.getData(1);
    
     
    $scope.agregar = function(){
       
        console.log($scope.AgregarPaquete)
        $scope.AgregarPaquete.activo =  true;
        $scope.AgregarPaquete.empresaId =  "11122333";
        /* LLamamos al servicio de naves para enviar un json
        *   con los datos agregar al servidor
        *   responde un un nuevo json con el elemento agregado 
        */
        serviceDestino
            .AgregarPaquete($scope.AgregarPaquete)
            .then(function(data) {
                $scope.data.push(data);
            })
            .catch(function(err){

            }) 
     
         //  Iniciamos las variables del formulario para presentación.

        $('#modal_user').modal('hide');
        $scope.nombre='';
        $scope.distancia='';
        $scope.descripcion='';

            
    }
    $scope.eliminar =function(id){

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