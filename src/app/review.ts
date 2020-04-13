import { Box } from './box';
import { Customer } from './customer';

export class Review {
    reviewId: number;
    reviewContent: string;
    box: Box;
    customer: Customer;

    constuctor(reviewId?: number, reviewContent?: string) {
        this.reviewId = reviewId;
        this.reviewContent = reviewContent;
    }
}

