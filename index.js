/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-fauxjax',

  included: function included(app) {
    this._super.included(app);
    if (app.env !== 'production') {
      app.import(app.bowerDirectory + '/fauxjax/dist/fauxjax.min.js', {
        type: 'test'
      });
    }
  },

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  }
};
