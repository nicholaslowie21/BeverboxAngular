import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MenuModule} from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ButtonModule} from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AccessRightErrorComponent } from './access-right-error/access-right-error.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    BreadcrumbComponent,
    AccessRightErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule,
	BrowserAnimationsModule,
	MenuModule,
	PanelMenuModule,
	ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
