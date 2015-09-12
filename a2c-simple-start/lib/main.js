import 'core-js';
import 'reflect-metadata';
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'simple-component-app'
})
@View({
  template: `
    <div>Hello {{name}}</div>
  `
})
class SimpleComponentApp {
  constructor() {
    this.name = 'Gion';
  }
}

bootstrap(SimpleComponentApp);
