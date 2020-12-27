import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  product: Product = {};
  id: number;
  output = '';
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
        this.id = +paramMap.get('id');
        this.getProductById(this.id);
      }
    )
  }
  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(product => this.product = product);
  }
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      alert("Xoá thành công");
      this.router.navigate(['/list-product']);
    }, error => this.output = 'xoá thất bại');
  }
}

