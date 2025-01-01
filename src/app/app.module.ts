import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthConfigModule } from './auth-config.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Interceptor/auth.interceptor';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartComponent } from './chart/chart.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

const APP_CONTAINERS = [
  DefaultLayoutComponent
]
@NgModule({
  declarations: [
    AppComponent, HomeComponent, UnauthorizedComponent, DashboardComponent, ChartComponent, PdfviewerComponent, ...APP_CONTAINERS
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AuthConfigModule,
    NgxChartsModule,
    NgxGraphModule,
    PdfViewerModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
