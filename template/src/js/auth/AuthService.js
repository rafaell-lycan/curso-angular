(function(){
  'use strict';

  angular.module('app')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['TokenHandlerService', '$state', '$timeout', '$http', 'appSettings', '$q'];

  function AuthService (TokenHandlerService, $state, $timeout, $http, appSettings, $q) {

    function login (credentials) {
      var deferred = $q.defer();

      $http.post(appSettings.authUrl + 'login', credentials)
        .then(function (response) {
          TokenHandlerService.set(response.data.token);
          deferred.resolve();
        })
        .catch(function  (err) {
          deferred.reject(err.data.err);
        });

      return deferred.promise;
    }

    function isLoggedIn () {
      return TokenHandlerService.get();
    }

    function authorize () {
      $timeout(function () {
        $state.go('login');
      });
    }

    return {
      isLoggedIn : isLoggedIn,
      authorize : authorize,
      login : login
    };
  };

})();
