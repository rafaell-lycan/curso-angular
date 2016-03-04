(function(){
  'use strict';

  // Http Interceptor
  angular.module('app')
    .factory('httpInterceptorService', httpInterceptorService);

  httpInterceptorService.$inject = ['TokenHandlerService'];

  function httpInterceptorService (TokenHandlerService) {
    function request (config) {
      config.headers = config.headers || {};
      if (TokenHandlerService.get()) {
        config.headers['x-access-token'] = TokenHandlerService.get();
      }

      return config;
    }

    return {
      request : request
    };
  }

  // Config HttpProvider

  angular.module('app')
    .config(httpConfig);

  httpConfig.$inject = ['$httpProvider'];

  function httpConfig ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptorService')
  };

})();
