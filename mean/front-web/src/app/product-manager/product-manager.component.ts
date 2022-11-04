import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products:any=[];
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe((data:Product[])=>{
      let response:any=data;
      this.products=response.data
    })
  }

}
