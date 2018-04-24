import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { MachineComponent } from './machine/machine.component';
import { FrontendComponent } from './frontend/frontend.component';


const routes: Routes = [
  { path: '', component: PortfolioComponent, children: [
    { path: '', redirectTo: 'ai', pathMatch: 'full' },
    { path: 'ai', component: MachineComponent },
    { path: 'frontend', component: FrontendComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class PortfolioRoutingModule { }
