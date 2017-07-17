import { Component, Input } from '@angular/core';

@Component({
  selector: 'landing',
  template: `
  <a routerLink='/frucomp' routerLinkActive='active'>Fruit page</a>`
})
export class Landing {
  title = 'landing';
}
