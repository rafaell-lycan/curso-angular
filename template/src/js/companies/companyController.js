(function () {
  'use strict';

  angular.module('app')
   .controller('companyController', companyController);

  companyController.$inject = ['$state', '$location', 'CompanyService'];

  function companyController ($state, $location, CompanyService) {
    var vm = this;

    CompanyService.get({id : $state.params.id }).$promise
      .then(function (response) {
        vm.company = response;

        return CompanyService.loadJobs({id : $state.params.id }).$promise;
      })
      .then(function (response) {
        vm.company.jobs = response.items;
      })
      .catch(function (err) {
        $location.path('/');
      });
  }

})();
