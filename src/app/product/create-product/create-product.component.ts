import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {AngularFireStorage} from '@angular/fire/storage';
import firebase from 'firebase';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  product: Product = {
    category: {
      id: 0
    }
  };
  categories: Category[] = [];
  output = '';
  path: string ='';

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private af: AngularFireStorage) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  upload(event: any) {
    this.path = event.target.files[0];
  }

  async uploadImage() {
    const snap = await this.af.upload('/files' + Math.random() + this.path, this.path);
    this.getUrl(snap);
  }

  private async getUrl(snap: firebase.storage.UploadTaskSnapshot) {
    const url = await snap.ref.getDownloadURL();
    this.product.image = url;
    await this.createNewProduct()//store the URL
  }

  createNewProduct() {
    this.productService.createNewProduct(this.product).subscribe( output => {this.output = 'suscess'} ,
        output => {this.output = 'fail'});
    this.product = {};
  }

  getAllCategory() {
    this.categoryService.getAllCategories().subscribe(categories => this.categories = categories);
  }
}
