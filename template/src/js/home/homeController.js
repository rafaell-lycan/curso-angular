(function () {
  'use strict';

  angular.module('app')
   .controller('homeController', homeController);

  homeController.$inject = ['JobService'];

  function homeController (JobService) {
    var vm = this;


    JobService.get().$promise
      .then(function(response){
        vm.jobs = response.items;
      })
      .catch(function(error) {
        console.error(error);
      });

  }

})();
