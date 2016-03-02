(function () {
  'use strict';

  angular.module('app')
    .factory('CompanyService', CompanyService);

    CompanyService.$inject = ['$resource'];

    function CompanyService ($resource) {

      return $resource('http://10.0.1.193:3000/api/companies/:id', {}, {
        loadJobs :{
          method : 'GET',
          url : 'http://10.0.1.193:3000/api/companies/:id/jobs'
        }
      });

    }

})();
