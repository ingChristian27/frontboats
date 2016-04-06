function serviceViaje($http, $q, $constants) {

    return {
        getAll: getAll,
        addViaje: addViaje
    }

    function getAll () {
        var defered = $q.defer();
        var promise = defered.promise;

        $http.get($constants.base+"index-json")
            .success(function(data) {
                defered.resolve(data);
            })
            .error(function(err) {
                defered.reject(err)
            });

        return promise;
    }

    function addViaje  (viaje) {
        var defered = $q.defer();
        var promise = defered.promise;

        $http.post($constants.base+"viajes", viaje)
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
    .service('serviceViaje', serviceViaje)
