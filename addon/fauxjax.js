import $ from 'jquery';

export default function Fauxjax(options) {
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
        url: url,
        method: 'GET'
      };

      return faux(request, json);
    },

    POST: function(url, json) {
      var request = {
        url: url,
        method: 'POST'
      };

      return faux(request, json);
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
}
