import {Category} from './category';

export interface Product {
  id?: number;
  name?: string;
  des?: string;
  price?: number;
  image?: string;
  category?: Category;
}
