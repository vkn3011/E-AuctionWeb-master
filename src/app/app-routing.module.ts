import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {TermsOfServiceComponent} from './core/terms-of-service/terms-of-service.component';
import {UserAgreementComponent} from './core/user-agreement/user-agreement.component';

const routes: Routes = [
  {path: '', redirectTo: 'product/create', pathMatch: 'full'},
/*  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},*/
  {path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path: 'terms-of-service', component: TermsOfServiceComponent},
  {path: 'user-agreement', component: UserAgreementComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
