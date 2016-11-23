import angular from 'angular';
import uiRouter from 'angular-ui-router';
import locationComponent from './location.component';

let locationModule = angular.module('location', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('location', {
      url: '/location',
      component: 'location'
    });
})

.component('location', locationComponent)

.name;

export default locationModule;
