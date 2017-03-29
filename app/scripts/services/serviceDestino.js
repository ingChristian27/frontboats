function serviceDestino($http, $q, $constants) {

    return {
        getAll: getAll,
        AgregarPaquete: AgregarPaquete,
        ObtenerPaquetesPaginados:ObtenerPaquetesPaginados,
        EliminarPaquete: EliminarPaquete,
        agregarImagenes: agregarImagenes,
        obtenerPaquete :obtenerPaquete
    }

    function getAll () {
        var defered = $q.defer();
        var promise = defered.promise;
        console.log($constants.base+"paquete")
        $http.get($constants.base+"paquete")
            .success(function(data) {
                defered.resolve(data);
            })
            .error(function(err) {
                defered.reject(err)
            });

        return promise;
    }
    function ObtenerPaquetesPaginados(page) {

        var defered = $q.defer();
        var promise = defered.promise;
        var route = $constants.base + "paquete/" + page
        $http.get(route)
            .success(function (data) {
                defered.resolve(data);
            })
            .error(function (err) {
                defered.reject(err)
            });

        return promise;
    }
    function obtenerPaquete(id) {

        var defered = $q.defer();
        var promise = defered.promise;
        var route = $constants.base + "paquete/detalle/" + id
         console.log(route);
        $http.get(route)
            .success(function (data) {
                defered.resolve(data);
            })
            .error(function (err) {
                defered.reject(err)
            });

        return promise;
    }

    function AgregarPaquete  (paquete) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http.post($constants.base+"paquete", paquete)
        .success(function(data) {
            defered.resolve(data);
        })
        .error(function(err) {
            defered.reject(err)
        });

        return promise;
         //

        var defered = $q.defer();
        var promise = defered.promise;
        $http.post($constants.base+"route-plan/"+id_ruta, data)
            .success(function(data) {
                defered.resolve(data);
        
            })
            .error(function(err) {
                defered.reject(err)
            });

        return promise;
         //
    }
    function EliminarPaquete (id){
        var defered = $q.defer();
        var promise = defered.promise;
        $http.delete($constants.base+"paquete?id="+id)
        .success(function(data) {
            defered.resolve(data);
        })
        .error(function(err) {
            defered.reject(err)
        });

        return promise;
    }
    function agregarImagenes(data){
        var defered = $q.defer();
        var promise = defered.promise;
        $http.post($constants.base+"paquete/imagenes", data)
        .success(function(data) {
            defered.resolve(data);
        })
        .error(function(err) {
            defered.reject(err)
        });

        return promise;
    }


};

//


/**
 * Pass function into module
 */
angular
    .module('homer')
    .service('serviceDestino', serviceDestino)


