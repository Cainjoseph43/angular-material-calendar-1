'use strict';

var angular = require('angular');
var interact;
try {
  interact = require('interact.js');
} catch (e) {
  /* istanbul ignore next */
  interact = null;
}

angular
  .module('md.calendar')
  .constant('interact', interact);
