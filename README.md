# angular-capitalize-filter (Not yet published)

AngularJS filter to capitalize sentences and specially team names.
forked and heavaly modified

## Installation (not yet published)

You can install the filter using [Bower](http://bower.io/):

```bash
$ bower install yk.filters.capitalize
```

Then you have to include it in your HTML:

```html
<script src="bower_components/yk_filters.capitalize/yk_capitalize.js"></script>
```

And inject the module `yk.filters.capitalize` as a dependency in your application:

```js
angular.module('webApp', ['yk.filters.capitalize']);
```

## Usage

You can use it like any other AngularJS filter:

```html
<p>{{ input | ykCapitalize:format }}</p>
```

Available formats:

* [all](#all)
* [first](#first)
* [custom (todo)](#custom)

### All

It capitalizes all the words of a given sentence. As it's the default format you can omit the parameter.

```html
<p>{{ sentence | capitalize:'all' }}</p>
```

### First

It capitalizes just the first letter of the given sentence.

```html
<p>{{ sentence | capitalize:'first' }}</p>
```

### Custom (todo)

Specially adapted for cutom pattern names, with uppercase abbreviation.

```html
<p>{{ teamName | capitalize:/pattern/ }}</p>
```

It formats the input as specified in the regex pattern

## Testing

To run the tests:

```bash
$ npm install && bower install
$ grunt test
