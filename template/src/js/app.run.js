(function(){
  'use strict';

  angular.module('app')
    .run(Run);

  Run.$inject = ['$rootScope', 'AuthService'];

  function Run ($rootScope, AuthService) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromPrams) {
      console.log(arguments);
      console.log("->", AuthService.isLoggedIn());
      if(toState.auth && !AuthService.isLoggedIn()) {
        AuthService.authorize();
      }
    });
  };

})();
