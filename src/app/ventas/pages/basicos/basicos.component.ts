import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower:string='marcelo';
  nombreUpper:string='MARCELO';
  nombreCompleto:string='mArceLo GUTIerrEz';

  fecha:Date=new Date(); //el dia de hoy;


}
