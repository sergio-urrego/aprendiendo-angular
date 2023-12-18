import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
  <h3>counter: {{counter}}</h3>

  <button (click)="incriaseby(+1)">+1</button>
  <button (click)="resetCounter()">resetCounter</button>
  <button (click)="incriaseby(-1)">-1</button>
  `


})
export class countercomponent{
  public counter: number =10

  incriaseby(value:number):void{
    this.counter += value;
  }

  resetCounter(){
    this.counter =10

  }

}
