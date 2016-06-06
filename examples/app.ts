import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {HelloWorldExamples} from './hello-world';

@Component({
  selector: 'app',
  template: `
    <div class="flexbox-container">
        <div class="flexbox-container__column">
            <ul>
                <li><a [routerLink]="['helloworld']">Hello World</a></li>
                <li><a href="./coverage">Test Coverage Report</a></li>
            </ul>
        </div>
        <div class="flexbox-container__column">
            <router-outlet></router-outlet>
        </div>
    </div>
  `,
  styles: [`
    .flexbox-container {
        display: flex;
    }`,
    `
    .flexbox-container__column {
        padding: 10px;
    }
  `],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  { path: '/helloworld', component: HelloWorldExamples }
])

export class App {
}
