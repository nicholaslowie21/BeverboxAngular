import { Component, OnInit } from '@angular/core';

import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view-all-articles',
  templateUrl: './view-all-articles.component.html',
  styleUrls: ['./view-all-articles.component.css']
})

export class ViewAllArticlesComponent implements OnInit {
	
	
	articles: Article[];
	displayDialog: boolean;
	articleToView: Article;


	constructor(private router: Router,
				private activatedRoute: ActivatedRoute,
				private articleService: ArticleService)
	{	  
	}
	

	ngOnInit() 
	{
		this.articleToView = new Article();
		this.articleService.getArticles().subscribe(
			response => {
				this.articles = response.articles;
			},
			error => {
				console.log('********** ViewAllArticlesComponent.ts: ' + error);
			}
		);
	}
	
	showDialog(articleId: number)
	{
		this.displayDialog = true;
		this.viewArticleDetail(articleId);
	}
	
	viewArticleDetail(articleId: number)
	{
		console.log('ID: ' + articleId);
		this.articleService.getArticleByArticleId(articleId).subscribe(
			response => {
				this.articleToView = response.article;
				console.log('Title: ' + this.articleToView.articleTitle);
			},
			error => {
				console.log('********** ViewAllArticlesComponent.ts: ' + error);
			}
		);
	}

}
