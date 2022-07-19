import { AunthenticationService } from '../services/aunthentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';
import { BehaviorSubject } from 'rxjs';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  orders: any = [];
  user: any ={};
  modalData: any ={};
  tipoUser: string;
  input:any;
  @ViewChild(IonModal) modal: IonModal;

  constructor(
    private authService: AunthenticationService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getUser();
    this.input = document.getElementById('estadoModal') as HTMLInputElement | null;
/*     this.getPedidos(); */
    /*     let id = this.getToken();
    console.log(id) */
  }

  async getToken() {
    const id = await this.authService.getToken();
    return id.value;
  }

  async getUser() {
    const id = await this.authService.getToken();
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
          this.tipoUser = "Administrador";
        }
        if(this.user.type == 1){
          console.log("usuario tipo cliente");
          this.tipoUser = "Cliente";
        }
        if(this.user.type == 2){
          console.log("usuario tipo repartidor");
          this.tipoUser = "Repartidor";
        }
        this.getPedidos(this.tipoUser);
      });
  }

  async deleteOrder(id){
    console.log(id);
    return this.http.delete('http://localhost:8092/v1/departamento/gerencia/pedidos/delete/'+id).subscribe
    ((data) => {
      console.log(data);
      window.location.reload();
    }
    );
    
  }

  async getPedidos(tipoUsuario) {
    const id = await this.authService.getToken();
    console.log(tipoUsuario)
    return this.http
      .get(
        'http://localhost:8092/v1/departamento/gerencia/pedidos/findBy'+tipoUsuario+'/' +
          id.value
      )
      .pipe(
        map((res: any) => {
          return res.content;
        })
      )
      .subscribe((data) => {
        console.log(data);

        this.orders = data;
      });
  }

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  loadModal(id){
    console.log("aqui id:"+id)
    this.getDetallePedido(id);
/*     var input = document.getElementById('loadModal'+id) as HTMLInputElement | null;
    console.log(input); */
    
  }

  async getDetallePedido(id){
    
    console.log(id);
    return this.http.get('http://localhost:8092/v1/departamento/gerencia/pedidos/findById/'+id)
    .pipe(
      map((res: any) => {
        return res;
      })
    ).subscribe
    ((data) => {
      console.log(data);
      this.modalData = data;
      if(this.modalData.estado == 0){
        this.modalData.estado = "EN DESARROLLO";
      }
      if(this.modalData.estado == 1){
        this.modalData.estado = "EN CAMINO";
      }
      if(this.modalData.estado == 2){
        this.modalData.estado = "ENTREGADO";
      }
      var input = document.getElementById('estadoModal') as HTMLInputElement | null;
      input.value = this.modalData.estado;
    }
    );
  }

  async updateEstado(estado){
    return this.http.put('http://localhost:8092/v1/departamento/gerencia/pedidos/update',{
      id: this.modalData.id,
      estado: estado,
      codigo: this.modalData.codigo,
      tiempo_ingreso: this.modalData.tiempo_ingreso,
      tiempo_entrega: this.modalData.tiempo_entrega,
      tiempo_estimado: this.modalData.tiempo_estimado,
      total: this.modalData.total,
      cliente: this.modalData.cliente,
      repartidor: this.modalData.repartidor,
      direccion: this.modalData.direccion,
      telefono: this.modalData.telefono,
      listaProductos: this.modalData.listaProductos,
      email: this.modalData.email,
      comentario: this.modalData.comentario,
    }).subscribe
    ((data) => {
      console.log(data);
      window.location.reload();
      this.getPedidos(this.tipoUser);
    }
    );
  }

  avanzar(){
    if(this.modalData.estado == "EN DESARROLLO"){
      this.updateEstado(1);
    }
    if(this.modalData.estado == "EN CAMINO"){
      this.updateEstado(2);
    }
    if(this.modalData.estado == "ENTREGADO"){
      alert("El pedido ya ha sido entregado");
    }
    console.log(this.modalData.estado);
  }
}
