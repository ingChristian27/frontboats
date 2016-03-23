function serviceNave($http, $q) {

    return {
        getAll: getAll,
        addNave: addNave
    }

    function getAll () {
        var defered = $q.defer();
        var promise = defered.promise;

        $http.get("http://botescartagena.azurewebsites.net/navesjson")
            .success(function(data) {
                defered.resolve(data);
            })
            .error(function(err) {
                defered.reject(err)
            });

        return promise;
    }
    function addNave  (nave) {
        var defered = $q.defer();
        var promise = defered.promise;

        $http.post("http://botescartagena.azurewebsites.net/naves", nave)
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
    .service('serviceNave', serviceNave)
