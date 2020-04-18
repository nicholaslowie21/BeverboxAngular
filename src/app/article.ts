export class Article {
	
	articleId: number;
	articleTitle: String;
	articleContent: String;
	articleImg: String;
	articleDate: Date;
	
	
	constructor(articleId?: number, articleTitle?: String, articleContent?: String, 
				articleImg?: String, articleDate?: Date) {
		this.articleId = articleId;
		this.articleTitle = articleTitle;
		this.articleContent = articleContent;
		this.articleImg = articleImg;
		this.articleDate = articleDate;
	}
}
