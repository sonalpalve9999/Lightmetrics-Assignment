import { Component ,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from '../api.service';
import { Country } from '../country';


@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountryListComponent {

  searchText:string='';
term:string;
  onSearchTextEntered(SearchValue:string){
   this.searchText=SearchValue;
   console.log(SearchValue);
  }

    listofCountry$: Observable<Country[]> ;
   constructor(private readonly dataservice : APIService ){
     
   }
   ngOnInit():void{
     this.getallCountry()
   }
   getallCountry(){
    this.listofCountry$=this.dataservice.handlegetCountry();
}



}