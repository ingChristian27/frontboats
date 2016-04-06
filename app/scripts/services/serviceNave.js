function serviceNave($http, $q, $constants) {

    return {
        getAll: getAll,
        addNave: addNave,
        deleteNave: deleteNave,
        alert: alert
    }

    function getAll () {
        var defered = $q.defer();
        var promise = defered.promise;

        $http.get($constants.base+"navesjson")
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

        $http.post($constants.base+"naves", nave)
            .success(function(data) {
                defered.resolve(data);
            })
            .error(function(err) {
                defered.reject(err)
            });

        return promise;
         
    }
    function alert(id){
         var defered = $q.defer();
        var promise = defered.promise;

        $http.get($constants.base+"/eliminar-naves/"+id)
            .success(function(data) {
                defered.resolve(data);
            })
            .error(function(err) {
                defered.reject(err)
            });
        console.log('funciona');
    }
    function deleteNave(id){
        var defered = $q.defer();
        var promise = defered.promise;

        $http.get($constants.base+"/eliminar-naves/"+id)
            .success(function(data) {
                defered.resolve(data);
            })
            .error(function(err) {
                defered.reject(err)
            });
       
    }


};

//


/**
 * Pass function into module
 */
angular
    .module('homer')
    .service('serviceNave', serviceNave)
