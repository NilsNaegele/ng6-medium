import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService, Article } from '../core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  article: Article = {} as Article;
  articleForm: FormGroup;
  tagField = new FormControl();
  errors: Object = {};
  isSubmitting = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private articlesService: ArticlesService,
              private fb: FormBuilder) {
                this.articleForm = this.fb.group({
                    title: '',
                    description: '',
                    body: ''
                });
              this.article.tagList = [];
              // this.articleForm.valueChanges.subscribe(value => this.updateArticle(value));
              }

  ngOnInit() {
    this.route.data.subscribe((data: { article: Article}) => {
        if (data.article) {
          this.article = data.article;
          this.articleForm.patchValue(data.article);
        }

    });
  }

  addTag() {
    const tag = this.tagField.value;
    if (this.article.tagList.indexOf(tag) < 1) {
      this.article.tagList.push(tag);
    }
    this.tagField.reset('');
  }

  removeTag(tagName: string) {
    this.article.tagList = this.article.tagList.filter(tag => tag !== tagName);
  }

  submitForm() {
    this.isSubmitting = true;
    this.updateArticle(this.articleForm.value);
    this.articlesService.save(this.article).subscribe(
      article => this.router.navigateByUrl(`/article/${article.slug}`),
      error => {
        this.errors = error;
        this.isSubmitting = false;
      }
    );
  }

  updateArticle(values: Object) {
    Object.assign(this.article, values);
  }

}
