import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemploGithub';
  numero1:Number=80;
  numero2:Number=30;
  resultado:Number;
  resultado2:Number;


  constructor(){
this.sumar();
this.restar();

  }

  public sumar():void{
   this.resultado=this.numero1.valueOf()+this.numero2.valueOf();

  }

  public restar():void{
    this.resultado2=this.numero1.valueOf()-this.numero2.valueOf();
   }

}
