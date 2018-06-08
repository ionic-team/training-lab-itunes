import { Component } from "@angular/core";
import { NavController, ViewController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  foo = HomePage;
  views: ViewController[];
  constructor(public navCtrl: NavController) {
    this.views = this.navCtrl.getViews();
  }
  pushClick(event: MouseEvent) {
    this.navCtrl.push(HomePage);
    console.log(event);
  }
}
