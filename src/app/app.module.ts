import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpHelperService } from './http-helper.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [HttpHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
