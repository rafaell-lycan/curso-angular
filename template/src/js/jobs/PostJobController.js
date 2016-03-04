(function () {
  'use stric';

  angular.module('app')
    .controller('PostJobController', PostJobController);

  PostJobController.$inject = ['JobService'];

  function PostJobController (JobService) {
    var vm = this;

    vm.jobTypes = [
      'Full Time',
      'Estágio',
      'Freela'
    ];

    vm.submitJob = function () {
      JobService.save(vm.job).$promise
        .then(function (response) {
          console.log("->", response);
        })
        .catch(function (err) {
          console.error('->', err);
        })
    }
  }

})();
