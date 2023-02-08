import { Component, EventEmitter, Output } from '@angular/core';
import { Observable} from 'rxjs';
import { APIService } from '../api.service';
import { Country } from '../country';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  enteredSearchValue:string = '';


  listofCountry$: Observable<Country[]> ;
constructor(private dataService:APIService){
    
  }
  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
