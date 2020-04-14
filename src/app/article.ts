export class Article {
	
	articleId: number;
	articleTitle: String;
	articleContent: String;
	articleImg: String;
	
	
	constructor(articleId?: number, articleTitle?: String, articleContent?: String, articleImg?: String) {
		this.articleId = articleId;
		this.articleTitle = articleTitle;
		this.articleContent = articleContent;
		this.articleImg = articleImg;
	}
}
