(function () {
  'use strict';

  angular.module('app')
    .controller('createCompanyController', createCompanyController);

  createCompanyController.$inject = ['CompanyService', '$location'];

  function createCompanyController (CompanyService, $location) {
    var vm = this;

    function CompanyModel () {
      this.name = null;
      this.companyLogo = null;
      this.website = null;
      this.email = null;
      this.password = null;
    }

    vm.company = new CompanyModel();

    vm.submitCompany = function () {
      vm.isLocked = true;

      CompanyService.save(vm.company).$promise
        .then(function (response) {
          $location.path('/');
        })
        .catch(function (err) {
          vm.isLocked = false;

          console.log('->', err);
        });
    }
  }

})();
