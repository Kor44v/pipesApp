import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  valor:boolean=true
  palabra:string='nosotros'

  constructor() { }

  ngOnInit(): void {
  }

  mayusculas(valor:boolean){
    
    this.valor = !this.valor
  }
}
