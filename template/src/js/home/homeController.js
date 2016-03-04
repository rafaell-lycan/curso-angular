(function () {
  'use strict';

  angular.module('app')
   .controller('homeController', homeController);

  homeController.$inject = ['JobService'];

  function homeController (JobService) {
    var vm = this;


    JobService.get({size : 20, page : 1}).$promise
      .then(function(response){
        vm.jobs = response.items;
      })
      .catch(function(error) {
        console.error(error);
      });

  }

})();
