import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }
  n1:number=261;
  str1:string='India';
  dt1:Date=new Date();

  ngOnInit(): void {
  }

}
