import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from '@app/portfolio/portfolio.routing';
import { MachineComponent } from './machine/machine.component';
import { FrontendComponent } from './frontend/frontend.component';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  declarations: [PortfolioComponent, MachineComponent, FrontendComponent]
})
export class PortfolioModule { }
