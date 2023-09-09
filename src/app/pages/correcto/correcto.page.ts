import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-correcto',
  templateUrl: './correcto.page.html',
  styleUrls: ['./correcto.page.scss'],
})
export class CorrectoPage {

  constructor(private navCtrl: NavController) {}

  redi_inicio() {
    this.navCtrl.navigateForward('/inicio');
  }

  redi_clase(){
    this.navCtrl.navigateForward('/miclase');
  }

}
