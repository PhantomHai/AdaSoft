import { AunthenticationService } from '../../services/aunthentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AunthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.credentials = this.fb.group({
      username: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
    });
    /* this.getUsers(); */
  }

/*   async loadToken() {
    const token = await Storage.get({ key: TOKEN_KEY });
    if (token && token.value) {
      console.log('set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      console.log('no token');
      this.isAuthenticated.next(false);
    }
  } */

  /* getUsers() {
    this.http
      .get(
        'http://localhost:8091/v1/departamento/gerencia/usuario/findByUsername/admin'
      )
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        })
      )
      .subscribe((data: any) => {
        console.log(data);
      });
  }
 */
  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

/*     let username = document.getElementById('username') as HTMLInputElement;
    let password = document.getElementById('password') as HTMLInputElement; */

/*     this.http
      .get(
        'http://localhost:8091/v1/departamento/gerencia/usuario/findByUsername/' +
          username.value
      )
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        })
      )
      .subscribe(async (data: any) => {
        console.log(data);
        console.log("data = " + data.password + " password = " + password.value);
        if (data.password == password.value) {
          this.authService.isAuthenticated.next(true);
          await loading.dismiss();
          this.router.navigate(['/tabs']);
        } else {
          this.authService.isAuthenticated.next(false);
          await loading.dismiss();
          this.showAlert();
        }
      }); */
      this.authService.login(this.credentials.value).subscribe(
        async (res) => {
          await loading.dismiss();
          this.router.navigateByUrl('/tabs', { replaceUrl: true });
        },
        async (res) => {
          await loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Usuario o contraseña incorrectos',
            buttons: ['OK'],
          });
          await alert.present();
        }
      )
  }

  /* showAlert() {
    this.alertController
      .create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK'],
      })
      .then((alert) => alert.present());
  } */

  // Easy access for form fields
  get username() {
    return this.credentials.get('username');
  }

  get password() {
    return this.credentials.get('password');
  }
}
