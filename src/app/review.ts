import { Box } from './box';
import { Customer } from './customer';

export class Review {
    reviewId: number;
	reviewContent: string;
	reviewRating: number;
	reviewDate: Date;
    boxId: number;
	boxName: string;
	customerId: number;
	customerName: string;
	customerEmail: string;

	constuctor(reviewId?: number, reviewContent?: string, reviewRating?: number, reviewDate?: Date, boxId?: number, 
			boxName?: string, customerId?: number, customerName?: string, customerEmail?: string) {
        this.reviewId = reviewId;
		this.reviewContent = reviewContent;
		this.reviewRating = reviewRating;
		this.reviewDate = reviewDate;
		this.boxId = boxId;
		this.boxName = boxName;
		this.customerId = customerId;
		this.customerName = customerName;
		this.customerEmail = customerEmail;
    }
}

