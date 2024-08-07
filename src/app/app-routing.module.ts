import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoinComponent } from './pages/coin/coin.component';

import { SaibaMaisComponent } from './pages/saiba-mais/saiba-mais.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },

    {path:'coin', component:CoinComponent},
    {
      path: 'coin/:coinName',
      component: CoinComponent
    },
  { path: '**',component:HomeComponent},
  { path: 'saiba-mais', component: SaibaMaisComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
