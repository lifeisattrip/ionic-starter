import {Injectable} from '@angular/core';
import {Category} from "./category";
import {Observable} from "rxjs";
import {of} from "rxjs/observable/of";



@Injectable()
export class HomeService {

  constructor() {
  }

  getCategories():Observable<Category[]>{
    return of([
      new Category(1,"ios-image-outline","secondary","测试图标1",10,"",""),
      new Category(2,"image","danger","测试图标2",0,"",""),
      new Category(3,"image","vibrant","测试图标3",10,"",""),
      new Category(4,"image","vibrant","测试图标4",99,"",""),
    ]);
  }

}
