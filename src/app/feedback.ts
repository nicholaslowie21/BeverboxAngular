export class Feedback {

    feedbackId: number;
    feedbackTitle: string;
    feedbackText: string;
    name: string;
    email: string;

    constructor(feedbackId?: number, feedbackTitle?: string, feedbackText?: string, name?: string, email?: string){
        this.feedbackId = feedbackId;
        this.feedbackTitle = feedbackTitle;
        this.feedbackText = feedbackText;
        this.name = name;
        this.email = email;
}

}
