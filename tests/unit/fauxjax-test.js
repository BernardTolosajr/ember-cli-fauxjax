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
    mock.restore();
  }
});

test('GET request', function(assert) {
  assert.expect(0);
  mock.expects('new')
      .once()
      .withArgs({request: {url: url, method: 'GET'}, response: {content: json}});

  faux.GET(url, json);
  mock.verify();
});

test('POST request', function(assert) {
  assert.expect(0);
  mock.expects('new')
      .once()
      .withArgs({request: {url: url, method: 'POST'}, response: {content: json}});

  faux.POST(url, json);
  mock.verify();
});

test('PUT request', function(assert) {
  assert.expect(0);
  mock.expects('new')
      .once()
      .withArgs({request: {url: url, method: 'PUT'}, response: {content: json}});

  faux.PUT(url, json);
  mock.verify();
});

test('DELETE request', function(assert) {
  assert.expect(0);
  mock.expects('new')
      .once()
      .withArgs({request: {url: url, method: 'DELETE'}, response: {content: json}});

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
