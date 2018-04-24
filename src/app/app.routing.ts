import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent, pathMatch: 'full', },
  { path: 'contact', component: ContactComponent, pathMatch: 'full', },
  { path: 'portfolio', loadChildren: 'app/portfolio/portfolio.module#PortfolioModule' },
  // { path: 'blog', loadChildren: 'app/blog/blog.module#BlogModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
