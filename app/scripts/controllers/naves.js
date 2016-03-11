/**
 *
 * Estudiante
 *
 */

angular
    .module('homer')
    .controller('navesCtrl', navesCtrl)

function navesCtrl($scope, $http ) {
   
   $http.get("http://botescartagena.azurewebsites.net/navesjson")
    .then(function(response) {
        
        $scope.test  = response.data;

    });

    $scope.peticion = function(){
        console.log("entro a la petición");
        var conAjax = $http.post("http://botescartagena.azurewebsites.net/navesjson/naves", {uno: 1, fruta: "manzana"});
                conAjax.success(function(respuesta){
                console.log(respuesta);
        });    
    }
    



       
        
        $scope.agregar = function(){
            $scope.buses.push({
                empresa_transporte: $scope.empresa_transporte,
                placa: $scope.placa,
                marca: $scope.marca,
                referencia: $scope.referencia,
                modelo: $scope.modelo,
                n_motor: $scope.n_motor,
                n_chasis: $scope.n_chasis,
                color: $scope.color,
                c_pasajeros: $scope.c_pasajeros,
                c_peso: $scope.c_peso,
                n_peso: $scope.n_peso,
                aseguradora: $scope.aseguradora,
                f_expedicion: $scope.f_expedicion,
                f_expiracion: $scope.f_expiracion,
                imangen: $scope.imangen,
                n_poliza: $scope.n_poliza,
                cobertura: $scope.cobertura,
                aseguradora: $scope.aseguradora,
                f_expedicion: $scope.f_expedicion,
                f_expiracion: $scope.f_expiracion,
                n_certificado: $scope.n_certificado,
                tecno_f_realizacion: $scope.tecno_f_realizacion,
                expedido_p: $scope.expedido_p,
                tecno_f_expiracion: $scope.tecno_f_expiracion
            });
            
            $('#modal_user').modal('hide');
            $scope.empresa_transporte='';
            $scope.placa='';
            $scope.marca='';
            $scope.referencia='';
            $scope.modelo='';
            $scope.n_motor='';
            $scope.n_chasis='';
            $scope.color='';
            $scope.c_pasajeros='';
            $scope.c_peso='';
            $scope.n_peso='';
            $scope.aseguradora='';
            $scope.f_expedicion='';
            $scope.f_expiracion='';
            $scope.imangen='';
            $scope.n_poliza='';
            $scope.cobertura='';
            $scope.aseguradora='';
            $scope.f_expedicion='';
            $scope.f_expiracion='';
            $scope.n_certificado='';
            $scope.tecno_f_realizacion='';
            $scope.expedido_p='';
            $scope.tecno_f_expiracion='';

            
        }
        $scope.detalleNave =function(text){
            $scope.nave = [];
            for (i=0; i < $scope.naves.length; i++)
                    if ($scope.naves[i].nombre === text)
                            $scope.nave.push($scope.naves[i]);      
               
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
        $scope.cambiausuario = function(usuario){

            $scope.usuario = usuario;
            $scope.usuarios = null;
            
        }
        $scope.open3 = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'views/modal/modal_example3.html',
                size: size,
                controller: ModalInstanceCtrl,
            });
        }


}
function ModalInstanceCtrl ($scope, $modalInstance) {

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};