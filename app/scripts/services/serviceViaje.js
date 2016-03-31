function serviceViaje($http, $q) {

    return {
        getAll: getAll,
        addViaje: addViaje
    }

    function getAll () {
        var defered = $q.defer();
        var promise = defered.promise;

        $http.get("http://botescartagena.azurewebsites.net/index-json")
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

        $http.post("http://botescartagena.azurewebsites.net/viajes", viaje)
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
