import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder ,Validators}   from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product:any={}
  productId:any='';
  constructor(private ps:ProductService,private router:ActivatedRoute,private routes:Router) { }
  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      this.productId=params['id']
      this.ps.getProduct(params['id']).subscribe((response)=>{
        let res:any=response
        this.product=res.data
      })
    })
  }

  deleteProduct(){
    this.ps.deleteProduct(this.productId)
    this.routes.navigate(['product'])
  }

}
