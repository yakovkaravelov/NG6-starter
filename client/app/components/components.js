import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import CancerType from './cancer-type/cancerType';
import Location from './location/location';

let componentModule = angular.module('app.components', [
  Home,
  About,
  CancerType,
  Location,
])

.name;

export default componentModule;
