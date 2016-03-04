(function(){
  'use strict';

  angular.module('app')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['TokenHandlerService', '$state', '$timeout'];

  function AuthService (TokenHandlerService, $state, $timeout) {

    function isLoggedIn () {
      return TokenHandlerService.get();
    }

    function authorize () {
      $timeout(function () {
        $state.go('home');
      });
    }

    return {
      isLoggedIn : isLoggedIn,
      authorize : authorize
    };
  };

})();
