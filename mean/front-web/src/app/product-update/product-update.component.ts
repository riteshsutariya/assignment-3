import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder ,Validators}   from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  angForm:FormGroup;
  product:any={}
  productId:any='';

  constructor(private fb:FormBuilder,private ps:ProductService,private router:ActivatedRoute,private routes:Router) {

    this.angForm=this.fb.group({
      p_name:['',Validators.required],
      p_manufacturer:['',Validators.required],
      p_countryOfOrigin:['',Validators.required],
      p_price:['',Validators.required],
      p_description:['']
    })
   }
  
  ngOnInit(): void {
    // first get querystring parameter using 
    this.router.params.subscribe(params=>{
      this.productId=params['id']
      this.ps.getProduct(params['id']).subscribe((response)=>{
        let res:any=response
        this.product=res.data
      })
    })
  }

  updateProduct(){
    this.ps.updateProduct(this.productId,this.angForm.value)
      this.routes.navigate(['product/manage'])
  }

}
