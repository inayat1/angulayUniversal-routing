import { Component } from '@angular/core';

@Component({
  selector: 'fruits',
  template: `<div>hello fruits</div>
  <a routerLink='/' routerLinkActive='active'>Users</a>`
})
export class Fruits {
  public fruits:any;
  title = 'fruits';
}
