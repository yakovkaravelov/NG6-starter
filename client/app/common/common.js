import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import Bot from './bot/bot';

let commonModule = angular.module('app.common', [
  Navbar,
  User,
  Bot,
])

.name;

export default commonModule;
