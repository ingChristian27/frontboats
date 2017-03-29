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
        
        $http({
            method: 'POST',
            url: $constants.base+"viajes",
            data: $.param(viaje),
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
    .service('serviceViaje', serviceViaje)
