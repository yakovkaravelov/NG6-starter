import angular from 'angular';
import BotFactory from './bot.factory';

let botModule = angular.module('bot', [])

.factory('Bot', ['$http', 'User', BotFactory])

.name;

export default botModule;
