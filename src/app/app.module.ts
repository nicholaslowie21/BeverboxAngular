import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MenuModule} from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ButtonModule} from 'primeng/button';
<<<<<<< Updated upstream
import {PanelModule} from 'primeng/panel';
import {TableModule, Table} from 'primeng/table';
=======
import { PanelModule } from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {CarouselModule} from 'primeng/carousel';

>>>>>>> Stashed changes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AccessRightErrorComponent } from './access-right-error/access-right-error.component';
<<<<<<< Updated upstream
import { BeverageTransactionComponent } from './transactionHistory/beverage-transaction/beverage-transaction.component';
=======
import { ViewAllBoxesComponent } from './products/view-all-boxes/view-all-boxes.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    BreadcrumbComponent,
    AccessRightErrorComponent,
<<<<<<< Updated upstream
    BeverageTransactionComponent
=======
    ViewAllBoxesComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< Updated upstream
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MenuModule,
    PanelMenuModule,
    ButtonModule,
    PanelModule,
    TableModule
=======
	FormsModule,
	HttpClientModule,
	BrowserAnimationsModule,
	MenuModule,
	PanelMenuModule,
  ButtonModule,
  PanelModule,
  TableModule,
  CarouselModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
