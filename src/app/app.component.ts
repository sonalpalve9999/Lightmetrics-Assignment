import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  searchText:string='';

  onSearchTextEntered(SearchValue:string){
   this.searchText=SearchValue;
   console.log(SearchValue);
  }
}
