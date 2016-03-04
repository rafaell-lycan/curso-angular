(function () {
  'use strict';

  angular.module('app')
    .config(configRoute);

  configRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configRoute ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        views : {
          '' : {
            templateUrl : 'src/views/home.html',
            controller: 'homeController',
            controllerAs : 'vm'
          },
          footer : {
            templateUrl : 'src/views/footer.html',
          }
        }
      })
      .state('job-description', {
        url : '/jobs/:id/',
        templateUrl : 'src/views/job-description.html',
        controller: 'jobsController',
        controllerAs : 'vm'
      })
      .state('company-description', {
        url : '/companies/:id/',
        templateUrl : 'src/views/company.html',
        controller: 'companyController',
        controllerAs : 'vm'
      })
      .state('new-company', {
        url : '/create-company',
        views : {
          '' : {
            templateUrl : 'src/views/create-company.html',
            controller: 'createCompanyController',
            controllerAs : 'vm'
          },
          header : {
            templateUrl : 'src/views/header.html',
          },
          footer : {
            templateUrl : 'src/views/footer.html',
          }
        }
      })
      .state('new-job', {
        url : '/post-job',
        templateUrl : 'src/views/post-job.html',
        auth : true,
        roles : ['admin']
        // controller: 'createCompanyController',
        // controllerAs : 'vm'
      });
  }

})();
