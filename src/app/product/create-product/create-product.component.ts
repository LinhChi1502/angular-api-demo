import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  product: Product = {};
  output = '';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  createNewProduct() {
    this.productService.createNewProduct(this.product).subscribe( output => {this.output = 'suscess'} ,
        output => {this.output = 'fail'});
  }
}
