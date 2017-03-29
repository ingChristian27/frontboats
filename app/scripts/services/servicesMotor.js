function serviceMotor($http, $q, $constants) {

    return {
        getAll: getAll
    }

    function getAll (criterio_busqueda) {
        var defered = $q.defer();
        var promise = defered.promise;
         $http({
            method: 'POST',
            url: $constants.base+"/buscar-disponibilidad",
            data: $.param(criterio_busqueda),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
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
