'use strict';

var Events = function Events() {
  var subs = {};

  var events = {
    on: function on(key, listener) {
      if (!Array.isArray(subs[key])) subs[key] = [];

      var index = subs[key].push(listener) - 1;

      return function () {
        return delete subs[key][index];
      };
    },
    emit: function emit(key, data) {
      if (Array.isArray(subs[key])) subs[key].filter(function (l) {
        return l;
      }).forEach(function (listener) {
        return listener(data);
      });
    }
  };

  return events;
};

module.exports = Events;