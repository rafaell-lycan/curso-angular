(function(){
  'use strict';

  angular.module('app')
    .factory('JobService', JobService);

  JobService.$inject = ['appSettings', '$resource'];

  function JobService(appSettings, $resource) {
    return $resource(appSettings.apiUrl + 'jobs/:id');

  }

})();
