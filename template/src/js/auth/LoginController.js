(function(){
  'use strict';

  angular.module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['AuthService', '$state'];

  function LoginController (AuthService, $state) {

    var vm = this;

    vm.loginAction = function () {
      AuthService.login(vm.login)
        .then(function  () {
          $state.go('new-job');
        })
        .catch(function (errMessage) {
          console.log(errMessage);
        });
    }

  };

})();
