import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  { path: '**', component: EmptyRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/app-two/'
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
