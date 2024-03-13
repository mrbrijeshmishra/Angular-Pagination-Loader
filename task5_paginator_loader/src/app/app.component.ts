import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Api Fetching';
  users: any;
  loader:boolean=true;
  itemsPerPage = 10;
  currentPage=1;

  constructor(private userData: UserDataService) {
    this.userData.users().subscribe(data =>{ this.users = data;
      this.loader=false
    // console.log(data);
    this.users.sort((a: any, b: any) => {
      if (a.emp_code < b.emp_code) {
        return -1;
      }
      if (a.emp_code > b.emp_code) {
        return 1;
      }
      return 0;
    }); // Sorting users by emp_code in ascending order
  })
  };

  get paginatedData(){
    const start = (this.currentPage -1) * (this.itemsPerPage);
    const end = start + this.itemsPerPage;

    return this.users.slice(start,end)
  }

  changePage(page:number){
    this.currentPage=page;
  }

}
