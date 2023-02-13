import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {


  //i18nSelect
  nombre:string='Marcelo';
  genero:string='masculino'
  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }


  //i18nPlural
  clientes:string[]=['María','Pedro','Juan','Matias','Marcelo'];
  clientesMapa={
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'Tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  }
  
  cambiarCliente(){
    this.nombre='Maria'
    this.genero='femenino'
  }

  borrarCliente(){
    this.clientes.shift();
  }

  //KeyValue Pipe
  persona={
    nombre:'Marcelo',
    edad:35,
    direccion:'Chile'
  }

  //Json Pipe
  heroes=[
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombnre:'Spiderman',
      vuela:false
    },
    {
      nombre:'Aquaman',
      vuela:false
    }
  ];

  //Async Pipe
  miObservable= interval(1000); 

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemso data de promesa');
    },3500)
  })


}
