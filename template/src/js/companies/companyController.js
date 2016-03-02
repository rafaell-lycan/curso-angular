(function () {
  'use strict';

  angular.module('app')
   .controller('companyController', companyController);

  companyController.$inject = ['$routeParams', '$location', 'CompanyService'];

  function companyController ($routeParams, $location, CompanyService) {
    var vm = this;

    CompanyService.get({id : $routeParams.id }).$promise
      .then(function (response) {
        vm.company = response;

        return CompanyService.loadJobs({id : $routeParams.id }).$promise;
      })
      .then(function (response) {
        vm.company.jobs = response.items;
      })
      .catch(function (err) {
        $location.path('/');
      });
  }

})();
