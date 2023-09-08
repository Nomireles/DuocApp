import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  public usuario: Usuario; 
  constructor(
    private router: Router,
    private toastController: ToastController,
    private navCtrl: NavController // Agregamos el NavController
  ) {
    this.usuario = new Usuario('', '', '', '', '', '', 0, null);
    this.usuario.setUsuario('', '');
  }

  public ngOnInit(): void {
    // Puedes descomentar la siguiente línea si quieres que la aplicación navegue directamente
    // a la página Home, así te ahorras de estar apretando el botón "Ingresar" a cada rato
    // if (this.usuario.correo !== '') this.ingresar();
  }

  public ingresar(): void {
    if (this.usuario) {
      // Validamos el usuario y si hay error no navegaremos a la página Home
      const mensajeError = this.usuario.validarUsuario();
      if (mensajeError) {
        this.mostrarMensaje(mensajeError);
        return;
      }

      // Como la página sólo permite ingresar el correo y la password, vamos a buscar el usuario para completar sus datos
      const usu: Usuario | undefined = this.usuario.buscarUsuarioValido(this.usuario.correo, this.usuario.password);
      
      if (usu) {
        // NavigationExtras sirve para pasarle parámetros a la página Home. Los parámetros se agregan al objeto "state"
        const navigationExtras: NavigationExtras = {
          state: {
            usuario: usu
          }
        };
        this.mostrarMensaje(`¡Bienvenido(a) ${usu.nombre} ${usu.apellido}!`);
        this.router.navigate(['/inicio'], navigationExtras); // Navegamos hacia el inicio y enviamos la información extra
      }
    }
  }

  public redi_correo(): void {
    // Agregamos el código para redireccionar a la página de correo
    this.navCtrl.navigateForward('/correo');
  }

  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion ? duracion : 2000
      });
    toast.present();
  }
}
