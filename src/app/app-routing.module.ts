import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { 
    path: 'forbidden', 
    component: UnauthorizedComponent 
  },
  { 
    path: 'unauthorized', 
    component: UnauthorizedComponent 
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { 
        path: 'pdf', 
        component: PdfviewerComponent 
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      { 
        path: 'home', 
        component: HomeComponent 
      },
      { 
        path: 'chart', 
        component: ChartComponent 
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
