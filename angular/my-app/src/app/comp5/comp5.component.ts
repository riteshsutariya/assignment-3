import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit {

  constructor() { }
  form:any={
    txtname:'',
    txtemail:'',
    txtgender:'male',
    txtage:null,
    txtcontact:null
  }
  formChange(event:Event):void{
     this.form[(event.target as HTMLInputElement).name]=(event.target as HTMLInputElement).value;
     console.log('form: ',this.form)
    }
    handleSubmit(event:Event):void{
      event.preventDefault();
      console.log('form submit called')
      alert(`name: ${this.form.txtname}\nemail: ${this.form.txtemail}\ngender: ${this.form.txtgender}\nage: ${this.form.txtage}`)
    }
  ngOnInit(): void {
  }

}
