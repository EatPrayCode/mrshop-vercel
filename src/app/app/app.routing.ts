
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../common/components/not-found/not-found.component';
import { BlankComponent } from '../layouts/blank/blank.component';
import { PagesComponent } from '../layouts/pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    // component: KitchensinkComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./../features/landing/landing.module').then(m => m.LandingModule)
      },
    ]
  },

  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'about', loadChildren: () => import('./../features/about/about.module').then(m => m.AboutModule) },
      { path: 'contact', loadChildren: () => import('./../features/contact/contact.module').then(m => m.ContactModule) },
      // { path: 'compare', loadChildren: () => import('./../features/compare/compare.module').then(m => m.CompareModule) },
      { path: 'checkout', loadChildren: () => import('./../features/checkout/checkout.module').then(m => m.CheckoutModule) },
      { path: 'faq', loadChildren: () => import('./../features/faq/faq.module').then(m => m.FaqModule) },
      { path: 'terms-conditions', loadChildren: () => import('./../features/terms-conditions/terms-conditions.module').then(m => m.TermsConditionsModule) },
      { path: 'cart', loadChildren: () => import('./../features/cart/cart.module').then(m => m.CartModule) },
      {
        path: 'account', loadChildren: () => import('./../features/account/account.module').then(m => m.AccountModule)
      },
      {
        path: 'rewards', loadChildren: () => import('./../features/rewards/rewards.module').then(m => m.RewardsModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./../features/home/home.module').then(m => m.HomeModule)
      },
      // {
      //   path: 'admin',
      //   loadChildren: () => import('./../features/admin/admin.module').then(m => m.AdminModule)
      // },
      {
        path: 'store',
        loadChildren: () => import('./../features/store/store.module').then((m) => m.StoreModule),
      },
      {
        path: ':id',
        loadChildren: () => import('./../features/store/store.module').then((m) => m.StoreModule),
      }
    ]
  },

  {
    path: '**',
    component: NotFoundComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
