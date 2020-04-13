import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { BeverageTransactionComponent } from  './transactionHistory/beverage-transaction/beverage-transaction.component';
import { AccessRightErrorComponent } from './access-right-error/access-right-error.component';
import { ViewAllBoxesComponent } from './products/view-all-boxes/view-all-boxes.component';
import { ViewAllPromotionsComponent } from './view-all-promotions/view-all-promotions.component';
import { ViewMySubscriptionHistoryComponent } from './transactionHistory/view-my-subscription-history/view-my-subscription-history.component';

const routes: Routes = [
	{ path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'beverageTransaction', component: BeverageTransactionComponent },
  { path: 'accessRightError', component: AccessRightErrorComponent },
  { path: 'viewAllBoxes', component: ViewAllBoxesComponent},
  { path: 'viewAllPromotions', component: ViewAllPromotionsComponent},
  { path: 'viewSubsHistory', component: ViewMySubscriptionHistoryComponent},
  {path: 'viewAllBoxes', component: ViewAllBoxesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
