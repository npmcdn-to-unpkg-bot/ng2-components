# Angular 2 Component Library

[![Build Status](https://travis-ci.org/ChrisMurphy/ng2-components.svg?branch=master)](https://travis-ci.org/ChrisMurphy/ng2-components)
[![Coverage Status](https://coveralls.io/repos/github/ChrisMurphy/ng2-components/badge.svg?branch=master)](https://coveralls.io/github/ChrisMurphy/ng2-components?branch=master)
[![npm version](https://badge.fury.io/js/ng2-components.svg)](https://badge.fury.io/js/ng2-components)
[![Dependency Status](https://david-dm.org/ChrisMurphy/ng2-components.svg)](https://david-dm.org/ChrisMurphy/ng2-components)

## Install via NPM 

```bash
npm install ng2-components
```

## Example Usage

```javascript
import {Component} from '@angular/core';
import {HelloWorld} from 'ng2-components/components';

@Component({
  selector: 'some-component',
  template: `
    <hello-world><hello-world>
  `,
  directives: [HelloWorld] 
})
export class SomeComponent {
}
```

## Demo

[Demo][gh-pages]

[gh-pages]: http://chrismurphy.github.io/ng2-components/
[comment]: https://www.tomsdev.com/blog/2015/tsd-travis-ci-github-rate-limit-reached/
[comment]: http://blog.500tech.com/setting-up-travis-ci-to-run-tests-on-latest-google-chrome-version/
