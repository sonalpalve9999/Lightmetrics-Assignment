import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
   languageisempty = false;
 currencyisempty = false;
imagepath;
capital ;
    continent;
    currency ;
    languages ;
    population ;
    timezone ;
  constructor(@Inject(MAT_DIALOG_DATA)public data){
    this.continent=data.continent_name,
    this.capital=data.capital_name,
    this.currency=data.currency_name,
    this.languages=data.language_name,
    this.population=data.population_name,
    this.timezone=data.timezone_name,
    this.imagepath=data.image_path,
    console.log(data.language_name);
  }
  ngOnInit():void{

  }
 

  checkempty(){
    if(this.currency === 'undefined' || this.languages === 'undefined'){
      return false;
    }
  }
 
}
