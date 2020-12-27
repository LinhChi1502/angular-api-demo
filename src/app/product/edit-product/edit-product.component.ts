import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Product = {};
  id: number;
  output = '';

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getProductById(this.id);
    })
  }

  ngOnInit(): void {
  }
  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(product => this.product = product);
  }
  editProduct(id: number) {
    this.productService.editProduct(id, this.product).subscribe(output => this.output = 'success',
        output => this.output = 'fail');
  }
}
