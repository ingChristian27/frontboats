function serviceMotor($http, $q) {

    return {
        getAll: getAll
    }

    function getAll (criterio_busqueda) {
        var defered = $q.defer();
        var promise = defered.promise;

        $http.post("http://localhost:8000/buscar-viaje", criterio_busqueda)
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
    .service('serviceMotor', serviceMotor)
