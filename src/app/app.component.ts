import { Component, OnInit } from '@angular/core';
import { UserService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng6-medium';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.populate();
  }


}
