(function () {
  'use strict';

  angular.module('app')
    .factory('CompanyService', CompanyService);

    CompanyService.$inject = ['$resource', 'appSettings'];

    function CompanyService ($resource, appSettings) {

      return $resource(appSettings.apiUrl + 'companies/:id', {}, {
        loadJobs :{
          method : 'GET',
          url : 'http://10.0.1.193:3000/api/companies/:id/jobs'
        }
      });

    }

})();
