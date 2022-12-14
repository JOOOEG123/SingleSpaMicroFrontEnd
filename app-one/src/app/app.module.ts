import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AppUiNavbarModule } from 'app-ui-navbar';

@NgModule({
  declarations: [
    AppComponent,
    // EmptyRouteComponent
    EmptyRouteComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, AppUiNavbarModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
