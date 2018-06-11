import { Component } from "@angular/core";
import { NavController, ViewController } from "ionic-angular";
import { ItunesProvider } from "../../providers/itunes/itunes";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  tunes = [];
  constructor(
    public iTunesProvider: ItunesProvider,
    public navCtrl: NavController
  ) {}

  onItemClick(tune) {
    console.log(`You clicked on ${tune.title}`);
  }
  ionViewDidLoad() {
    this.iTunesProvider.get().then(data => (this.tunes = data));
  }
}
