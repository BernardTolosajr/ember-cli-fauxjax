import $ from 'jquery';

var fauxjax = function Fauxjax(options) {
  'use strict';
  options = options || {};

  $.fauxjax.settings = {
    status:        options.status || 200,
    statusText:    options.statusText || "OK",
    responseTime:  options.responseTime || 0,
    isTimeout:     options.isTimeout  || false,
    content:       options.content || '',
    headers:       options.headers || {},
    strictMatching: options.strictMatching || true
  };

  function faux(request, json) {
    return $.fauxjax.new({request: request, response: {content: json}});
  }

  return {
    GET: function(url, json) {
      var request = {
        url: url
      };

      return faux(request, json);
    },

    POST: function(url, options) {
      var request = {
        url: url,
        method: 'POST',
        data: options.data || ''
      };

      return faux(request, options.json);
    },

    PUT: function(url, json) {
      var request = {
        url: url,
        method: 'PUT'
      };

      return faux(request, json);
    },

    DELETE: function(url, json) {
      var request = {
        url: url,
        method: 'DELETE'
      };

      return faux(request, json);
    },

    clear: function() {
      $.fauxjax.clear();
    },

    remove: function(id) {
      $.fauxjax.remove(id);
    }
  };
};

export default fauxjax;
