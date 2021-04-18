import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AboutComponent} from './about/about.component';
import {CatalogComponent} from './catalog/catalog.component';
import {DataService} from './services/data.service';
import {JokesComponent} from './jokes/jokes.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatLabel} from '@angular/material/form-field';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'about', component: AboutComponent},
  {path: 'jokes', component: JokesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CatalogComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatLabel
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
