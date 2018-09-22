import { Component, Input } from '@angular/core';
import { ArticlesService, ArticleListConfig, Article } from '../../../core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  @Input() limit: number;
  @Input() set config(config: ArticleListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  query: ArticleListConfig;
  results: Article[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  constructor(private articlesService: ArticlesService) { }


  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
  }

  runQuery() {
    this.loading = true;
    this.results = [];
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset = (this.limit * (this.currentPage - 1));
    }
    this.articlesService.query(this.query)
                        .subscribe(data => {
                          this.loading = false;
                          this.results = data.articles;
                          this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);

                        });
  }


}
