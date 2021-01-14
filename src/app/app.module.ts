import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListProductComponent } from './product/list-product/list-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { AuthComponent } from './auth/auth.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ListProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    DetailProductComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBWVjfpz7u-1bEgQLdJvVQAFRJY_tG66_E",
      authDomain: "uploadfile-demo-9b3a8.firebaseapp.com",
      projectId: "uploadfile-demo-9b3a8",
      storageBucket: "uploadfile-demo-9b3a8.appspot.com",
      messagingSenderId: "783119327441",
      appId: "1:783119327441:web:677f5241888babadfca5f0",
      measurementId: "G-6PY1G13W0V"
    }),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
