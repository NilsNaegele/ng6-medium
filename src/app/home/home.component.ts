import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TagsService, UserService, ArticleListConfig } from '../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;
  listConfig: ArticleListConfig = {
        type: 'all',
        filters: {}
  };
  tags: Array<string> = [];
  tagsLoaded = false;

  constructor(private router: Router,
              private tagsService: TagsService,
              private userService: UserService) { }

  ngOnInit() {
      this.userService.isAuthenticated.subscribe((authenticated) => {
        this.isAuthenticated = authenticated;
        if (authenticated) {
          this.setListTo('feed');
        } else {
          this.setListTo('all');
        }
      });
  }

  setListTo(type: string = '', filters: Object = {}) {
      if (type === 'feed' && !this.isAuthenticated) {
        this.router.navigateByUrl('/login');
        return;
      }
      this.listConfig = { type: type, filters: filters };
  }


}
