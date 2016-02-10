import {Component} from 'angular2/core';
import {HelloWorld} from '../src/hello-world/hello-world';

@Component({
  selector: 'app',
  template: `
    <h1>Examples</h1>
    <hello-world><hello-world>
  `,
  directives: [HelloWorld] 
})
export class App {
}