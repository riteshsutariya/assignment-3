import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from "@angular/forms"
import {ProductService} from "../product.service"
import { Product } from '../product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})
export class ProductInsertComponent implements OnInit {
  angForm:FormGroup;
  constructor(private fb:FormBuilder,private ps: ProductService,private routes:Router,
	) {
    this.angForm=this.fb.group({
      p_name:['',Validators.required],
      p_manufacturer:['',Validators.required],
      p_countryOfOrigin:['',Validators.required],
      p_price:['',Validators.required],
      p_description:['']
    })
   }
   
   ngOnInit(): void {
   }
   addProduct:any;
   insertProduct(){
    this.ps.addProduct(this.angForm.value);
    this.routes.navigate(['product/manage']); 
  }


}
