import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {  GraphComponent } from './graph/graph.component';
import { Routes, RouterModule } from '@angular/router';
import { PalindromeSearchComponent } from './palindrome-search/palindrome-search.component';

const appRoutes: Routes = [
  {
    path: '',
    component:GraphComponent,
    data: { title: 'Basic Bar Graph' }
  },
  {
    path: 'bar-graph',
    component: GraphComponent,
    data: { title: 'Bar Graph' }
  },
  {
    path: 'palindrome-search',
    component: PalindromeSearchComponent,
    data: { title: 'Second Largest Palindrome' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    PalindromeSearchComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
