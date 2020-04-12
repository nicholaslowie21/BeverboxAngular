import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
<<<<<<< Updated upstream
import { BeverageTransactionComponent } from  './transactionHistory/beverage-transaction/beverage-transaction.component';
import { AccessRightErrorComponent } from './access-right-error/access-right-error.component';
=======
import { ViewAllBoxesComponent } from './products/view-all-boxes/view-all-boxes.component';
>>>>>>> Stashed changes

const routes: Routes = [
	{ path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
<<<<<<< Updated upstream
  { path: 'beverageTransaction', component: BeverageTransactionComponent },
  { path: 'accessRightError', component: AccessRightErrorComponent }
=======
  {path: 'viewAllBoxes', component: ViewAllBoxesComponent}
>>>>>>> Stashed changes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
