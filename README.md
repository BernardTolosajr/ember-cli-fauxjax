# ember-cli-fauxjax
Simple wrapper for fauxjax.js

## Installation

```ember install:addon ember-cli-fauxjax```

## Setup

You can then import fauxjax in your tests:

```javascript
import fauxjax from 'ember-cli-fauxjax';
```
```javascript
GET request
var faux = fauxjax()
var json = [1, 2];
faux.GET('/faux-request', json);
```

```javascript
POST request
var faux = fauxjax()
var json = {success: true};
var options = {data: {a: 'b'}, json: json};
faux.POST('/faux-request', options);
```

```javascript
Setting defaults
var faux = fauxjax({status: 201})
var json = {success: true};
faux.POST('/faux-request', json);
```

```javascript
Clear All Fauxjax Handlers
var faux = fauxjax()
faux.clear()
```

```javascript
Remove a Single Fauxjax Handler
var faux = fauxjax()
var id = faux.GET('/faux-request', [1, 2]);
faux.remove(id)
```

see: [JarrodCTaylor/fauxjax](https://github.com/JarrodCTaylor/fauxjax) for fauxjax
docs
