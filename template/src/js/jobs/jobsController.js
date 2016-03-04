(function () {
  'use strict';

  angular.module('app')
   .controller('jobsController', jobsController);

  jobsController.$inject = ['$http', '$state', '$location'];

  function jobsController ($http, $state, $location) {
    var vm = this;

    console.log("->", $state);

    $http.get('http://10.0.1.193:3000/api/jobs/' + $state.params.id)
      .then(function (response) {
        vm.job = response.data;
      })
      .catch(function (err) {
        $state.go('home');
      });
  }

})();
