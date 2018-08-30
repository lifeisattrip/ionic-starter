import {Component, OnInit, Provider} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomeService} from "./home.service";
import {Category} from "./category";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit{

  categories: Category[];

  ngOnInit() {
    this.getCategories();
    console.log(this.categories)
  }

  constructor(public navCtrl: NavController,
              private homeService: HomeService) {

  }

  getCategories(): void {
    this.homeService.getCategories().subscribe(
      categories => this.categories = categories
    );
  }

}
