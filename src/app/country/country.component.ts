import { ChangeDetectionStrategy, Component, Input,OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Country } from '../country';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
 changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountryComponent {
@Input() country!:Country


c_name;
  listofCountry: Object ;
 constructor(private dialogref : MatDialog){
 }
 
 ngOnInit(){
  this.c_name=this.country.name.common
 }


 searchText:string='';
//   onsearchTextEntered(searchValue:string){
//   this.searchText=searchValue;
//  console.log(this.searchText)
//   }

openDialogue(){
  this.dialogref.open(PopUpComponent ,
    {data:{  
      country_name:this.country.name.common,
      image_path:this.country.flags.png,
      capital_name:this.country.capital,
      continent_name : this.country.continents,
      currency_name :this.country.currencies.EUR.name,
    language_name :this.country.languages.fra ,
    population_name :this.country.population,
    timezone_name:this.country.timezones
  }})
  
}

 }


