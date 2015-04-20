import fauxjax from 'ember-cli-fauxjax';
import { module, test } from 'qunit';
import $ from 'jquery';

var mock,
    faux,
    url,
    json;

module('fauxjax', {
  beforeEach: function() {
    url = '/faux-request';
    json = {success: true};
    mock = sinon.mock($.fauxjax);
    faux = fauxjax();
  },

  afterEach: function() {
    faux.clear();
    mock.restore();
  }
});

test('GET request', function(assert) {
  assert.expect(0);
  mock.expects('new')
      .once()
      .withArgs({request: {url: url}, response: {content: json}});

  faux.GET(url, json);
  mock.verify();
});

test('POST request', function(assert) {
  assert.expect(0);
  var options = {
    data: {data: '1'},
    json: json
  };

  mock.expects('new')
      .once()
      .withArgs({request: {
        url: url,
        type: 'POST',
        data: options.data
       }, response: {
        content: json
       }});

  faux.POST(url, options);
  mock.verify();
});

test('PUT request', function(assert) {
  assert.expect(0);
  mock.expects('new')
      .once()
      .withArgs({request: {url: url, type: 'PUT'}, response: {content: json}});

  faux.PUT(url, json);
  mock.verify();
});

test('DELETE request', function(assert) {
  assert.expect(0);
  mock.expects('new')
      .once()
      .withArgs({request: {url: url, type: 'DELETE'}, response: {content: json}});

  faux.DELETE(url, json);
  mock.verify();
});

test('clear all handlers', function(assert) {
  assert.expect(0);
  mock.expects('clear')
      .once();

  faux.clear();
  mock.verify();
});

test('remove a Single Fauxjax Handler', function(assert) {
  var id = faux.GET(url, json);
  assert.equal(id, 0);
  mock.expects('remove')
      .once()
      .withArgs(id);

  faux.remove(id);
  mock.verify();
});

test('override default status settings', function(assert) {
  fauxjax({status: 201});
  assert.equal($.fauxjax.settings.status, 201);
});
