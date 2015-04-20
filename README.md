# ember-cli-fauxjax
Simple wrapper for fauxjax.js

## Installation

```ember install:addon ember-cli-fauxjax --save-dev```

## Setup

You can then import fauxjax in your tests:

```javascript
import faxjax from 'ember-cli-fauxjax';
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
faux.POST('/faux-request', json);
```

see: [JarrodCTaylor/fauxjax](https://github.com/JarrodCTaylor/fauxjax) for fauxjax
docs
