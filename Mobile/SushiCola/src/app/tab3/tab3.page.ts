import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AunthenticationService } from '../services/aunthentication.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  user: any ={};
  tipoUser: number;
  nombreCompleto: boolean;
  modify: boolean;
  estado: string;

  constructor(
    private authService: AunthenticationService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(){
    this.getUser();
  }

  switchModify(){
    this.modify= !this.modify;
  }
  async getToken() {
    const id = await this.authService.getToken();
    return id.value;
  }

  async getUser() {
    const id = await this.authService.getToken();
    console.log(id.value);
    return this.http
      .get(
        'http://localhost:8091/v1/departamento/gerencia/usuario/findById/' +
          id.value
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.user = data;
        console.log("tipo usuario " + this.user.type);
        if(this.user.type == 0){
          console.log("usuario tipo administrador");
          this.tipoUser = 0;
        }
        if(this.user.type == 1){
          console.log("usuario tipo cliente");
          this.tipoUser = 1;
        }
        if(this.user.type == 2){
          console.log("usuario tipo repartidor");
          this.tipoUser = 2;
        }
        //
        if(this.user.nombre != null && this.user.nombre != null){
          this.nombreCompleto = true;
        }else{
          this.nombreCompleto = false;
        }
        if(this.user.estado == 1){
          this.estado = "Activo";
        }
        if(this.user.estado == 0){
          this.estado = "Inactivo";
        }
        if(this.user.estado == 2){
          this.estado = "En Reparto";
        }
      });
  }

  getTipoUser(){
    return this.tipoUser;
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

}
