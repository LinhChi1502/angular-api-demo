import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute} from '@angular/router';
import firebase from 'firebase';
import {AngularFireStorage} from '@angular/fire/storage';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Product = {
    category: {
      id: 0
    }
  };
  id: number;
  output = '';
  path: string = '';
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private af: AngularFireStorage,
              private categoryService:CategoryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getProductById(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(product => this.product = product);
  }

  editProduct(id: number) {
    this.productService.editProduct(id, this.product).subscribe(output => this.output = 'success',
      output => this.output = 'fail');
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
    await this.editProduct(this.id);//store the URL
  }

  getAllCategory() {
    this.categoryService.getAllCategories().subscribe(categories => this.categories = categories);
  }
}
