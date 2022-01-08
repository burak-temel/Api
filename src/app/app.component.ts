import { Component } from '@angular/core';
import { observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';
  /**
   *
   */
  constructor (private userService: UserService) {} 
     
  login(){
    this.userService.login("",".").subscribe(result => {
      console.log(result.openApiroarand)
    });
  }
}
