import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { GlobalService } from './global.service';
import { UtilService } from './util.service';

const appRoutes: Routes = [
    //    { path: '', component: HomeComponent },
    //    { path: 'home', component: HomeComponent },
    //    { path: 'search', component: SearchComponent },
    //    { path: 'blog', component: BlogComponent },
    //    { path: 'movies', component: MoviesComponent },
    //    { path: 'music', component: MusicComponent },
    //    { path: 'gifts', component: GiftsComponent },
    //    { path: 'contactus', component: ContactusComponent },
    //      {
    //        path: 'heroes',
    //        component: HeroListComponent,
    //        data: { title: 'Heroes List' }
    //      },  
    //    { path: '**', component: HomeComponent }
];

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(appRoutes),
    ],
    providers: [
        GlobalService,
        UtilService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
