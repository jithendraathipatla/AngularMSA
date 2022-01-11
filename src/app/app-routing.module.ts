import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { PublicComponent } from './public/public.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';

const routes: Routes = [{
  path:'public', component: PublicComponent
},{
  path:'restricted-page', component:RestrictedPageComponent
},{
  path:'**', component:PublicComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
