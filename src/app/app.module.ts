import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';

import {MenuModule} from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {CarouselModule} from 'primeng/carousel';
import {CalendarModule} from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AccessRightErrorComponent } from './access-right-error/access-right-error.component';
import { BeverageTransactionComponent } from './transactionHistory/beverage-transaction/beverage-transaction.component';
import { ViewAllBoxesComponent } from './products/view-all-boxes/view-all-boxes.component';
import { ViewAllPromotionsComponent } from './view-all-promotions/view-all-promotions.component';
import { ViewMySubscriptionHistoryComponent } from './transactionHistory/view-my-subscription-history/view-my-subscription-history.component';
import { ViewBeverageComponent } from './products/view-beverage/view-beverage.component';
import { ViewAllArticlesComponent } from './view-all-articles/view-all-articles.component';
import { SafePipe } from './safe.pipe';
import { ViewAllOptionsComponent } from './view-all-options/view-all-options.component';
import { CreateSubscriptionComponent } from './create-subscription/create-subscription.component';
import { ViewMyReviewsComponent } from './view-my-reviews/view-my-reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    BreadcrumbComponent,
    AccessRightErrorComponent,
    BeverageTransactionComponent,
    ViewAllBoxesComponent,
    ViewAllPromotionsComponent,
    ViewMySubscriptionHistoryComponent,
    ViewBeverageComponent,
    ViewAllArticlesComponent,
    SafePipe,
    ViewAllOptionsComponent,
    CreateSubscriptionComponent,
    ViewMyReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MenuModule,
    PanelMenuModule,
    ButtonModule,
    PanelModule,
    TableModule,
    CarouselModule,
    CalendarModule,
    DialogModule,
    CardModule,
	MessagesModule,
	MessageModule

	],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
