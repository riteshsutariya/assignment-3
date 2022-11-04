import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any=[];
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe((data:Product[])=>{
      let response:any=data;
      this.products=response.data
    })
  }
}
