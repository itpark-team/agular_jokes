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
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import {AddJokeModalComponent} from './jokes/add-joke-modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UpdateJokeModalComponent} from './jokes/update-joke-modal.component';

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
    JokesComponent,
    AddJokeModalComponent,
    UpdateJokeModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NgbModule,
    MatDialogModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
