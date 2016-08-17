import {Component} from '@angular/core';
import {HelloWorld} from '../src/hello-world/hello-world';

@Component({
  selector: 'hello-world-examples',
  template: `
    <h1>Hello World</h1>
    <hello-world><hello-world>
  `,
  directives: [HelloWorld] 
})
export class HelloWorldExamples {
}
