import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { BeverageTransactionComponent } from  './transactionHistory/beverage-transaction/beverage-transaction.component';
import { AccessRightErrorComponent } from './access-right-error/access-right-error.component';
import { ViewAllBoxesComponent } from './products/view-all-boxes/view-all-boxes.component';
import { ViewAllPromotionsComponent } from './view-all-promotions/view-all-promotions.component';
import { ViewMySubscriptionHistoryComponent } from './transactionHistory/view-my-subscription-history/view-my-subscription-history.component';
import { ViewBeverageComponent } from './products/view-beverage/view-beverage.component';
import { ViewAllArticlesComponent } from './view-all-articles/view-all-articles.component';
import { ViewAllOptionsComponent } from './products/view-all-options/view-all-options.component';
import { CreateSubscriptionComponent } from './create-subscription/create-subscription.component';
import { ViewMyReviewsComponent } from './view-my-reviews/view-my-reviews.component';
import { ViewMyProfileComponent } from './view-my-profile/view-my-profile.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
	{ path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'beverageTransaction', component: BeverageTransactionComponent },
  { path: 'accessRightError', component: AccessRightErrorComponent },
  { path: 'viewAllBoxes', component: ViewAllBoxesComponent},
  { path: 'viewAllPromotions', component: ViewAllPromotionsComponent},
  { path: 'viewSubsHistory', component: ViewMySubscriptionHistoryComponent},
  { path: 'viewBeverage', component: ViewBeverageComponent},
  { path: 'viewAllArticles', component: ViewAllArticlesComponent},
  { path: 'viewAllOptions', component: ViewAllOptionsComponent},
  { path: 'createSubscription/:optId1/:optId2', component: CreateSubscriptionComponent},
  { path: 'viewMyReviews', component: ViewMyReviewsComponent},
  { path: 'viewMyProfile', component: ViewMyProfileComponent},
  { path: 'createAccount', component: CreateAccountComponent},
  { path: 'aboutUs', component: AboutUsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
