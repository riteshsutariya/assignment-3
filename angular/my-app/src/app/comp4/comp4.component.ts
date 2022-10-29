import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  constructor() { }
  arr:string[]=["India","Russia","France","Japan","Australia"]
  currentSelection:string="India";
  onChange(event:Event):void{
    this.currentSelection=(event.target as HTMLInputElement).value;
  }
  ngOnInit(): void {
  }

}
