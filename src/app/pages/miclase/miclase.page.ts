import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-miclase',
  templateUrl: './miclase.page.html',
  styleUrls: ['./miclase.page.scss'],
})
export class MiclasePage {

  constructor(private navCtrl: NavController) {}

  redi_inicio() {
    this.navCtrl.navigateForward('/inicio');
  }

  redi_clase(){
    this.navCtrl.navigateForward('/miclase');
  }
}
