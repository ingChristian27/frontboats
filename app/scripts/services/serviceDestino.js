function serviceDestino($http, $q, $constants) {

    return {
        getAll: getAll,
        addDestino: addDestino
    }

    function getAll () {
        var defered = $q.defer();
        var promise = defered.promise;

        $http.get($constants.base+"destinos")
            .success(function(data) {
                defered.resolve(data);
            })
            .error(function(err) {
                defered.reject(err)
            });

        return promise;
    }
    function addDestino  (destino) {
        var defered = $q.defer();
        var promise = defered.promise;

        $http.post($constants.base+"destinos", destino)
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


