(function(){
  'use strict';

  angular.module('app')
    .factory('TokenHandlerService', TokenHandlerService);

  // TODO : Put token on Session/Local Storage
  function TokenHandlerService () {
    var _token;

    function getToken () {
      return _token;
    }

    function setToken (newToken) {
      if (!newToken) return;

      _token = newToken;
    }

    return {
      get : getToken,
      set : setToken
    };
  };

})();
