(function () {
  'use strict';

  angular.module('app')
   .controller('jobsController', jobsController);

  jobsController.$inject = ['$http', '$routeParams', '$location'];

  function jobsController ($http, $routeParams, $location) {
    var vm = this;

    $http.get('http://10.0.1.193:3000/api/jobs/' + $routeParams.id)
      .then(function (response) {
        vm.job = response.data;
      })
      .catch(function (err) {
        $location.path('/');
      });
  }

})();
