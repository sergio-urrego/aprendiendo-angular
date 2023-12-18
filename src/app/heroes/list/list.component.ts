import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public horeosnames: string[]=['spiderman','iroman','hulk','she hulk','thor']

  public deletedhero?:string;

  removelasthero():void{
    this.deletedhero=this.horeosnames.pop();
  }

}
