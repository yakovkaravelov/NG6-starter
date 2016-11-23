import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cancerTypeComponent from './cancerType.component';

let cancerTypeModule = angular.module('cancerType', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('cancerType', {
      url: '/cancer-type',
      component: 'cancerType'
    });
})

.component('cancerType', cancerTypeComponent)

.name;

export default cancerTypeModule;
