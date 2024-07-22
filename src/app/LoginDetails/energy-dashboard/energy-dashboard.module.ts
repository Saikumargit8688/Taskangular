import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EnergyDashboardRoutingModule } from './energy-dashboard-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CustomerComponent } from './customer/customer.component';
import { FaqComponent } from './faq/faq.component';
import { GreenComponent } from './green/green.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    AboutComponent,
    BlogComponent,
    CustomerComponent,
    FaqComponent,
    GreenComponent,
    SolutionsComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    EnergyDashboardRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class EnergyDashboardModule { }
