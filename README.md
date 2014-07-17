## Check bunch of sites for a given pattern

Promise-based site content predicate applicator

```javascript
var urls = [
	'https://github.com/petkaantonov/bluebird',
	'https://github.com/boo1ean/shitty-qs',
	'https://github.com/msemenistyi/hypnos'
];

// Check github repos for existance of LICENSE file
csf(urls, 'blob/master/LICENSE').then(function(results) {
	console.log(results);
});

// ->

{ 'https://github.com/petkaantonov/bluebird': true,
  'https://github.com/boo1ean/shitty-qs': true,
  'https://github.com/msemenistyi/hypnos': false }
```
