import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCheckboxModule,
  MatRadioModule,
  MatDialogModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule, MatNativeDateModule, MatSliderModule, MatSelectModule, MatProgressSpinnerModule, MatGridListModule
} from "@angular/material";
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { ResultComponentComponent } from './components/result-component/result-component.component';
import { HttpClientModule } from "@angular/common/http";
import { PopupQueryComponent } from './components/query-popup-selector/popup-query.component';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideMenuComponent,
    HeaderComponentComponent,
    ResultComponentComponent,
    PopupQueryComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatGridListModule
  ],
  entryComponents: [
    PopupQueryComponent
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
