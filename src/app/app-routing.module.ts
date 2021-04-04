import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdblockActivoComponentComponent } from './adblock-activo-component/adblock-activo-component.component';


const routes: Routes = [
  { path: 'adblock_/:route', pathMatch: 'prefix', component: AdblockActivoComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
