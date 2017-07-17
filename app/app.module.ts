import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';
import { BrowserPrebootModule } from 'preboot/browser';
import { AppComponent } from './app.component';
import { provideStore } from '@ngrx/store';
import { routing }  from './app.routes';
import { AppState } from './reducer';
import { Fruits }  from './fruits/fruits.component';
import { Landing }  from './landing/landing.component';

@NgModule({
    imports: [
        BrowserPrebootModule.replayEvents(),
        BrowserModule.withServerTransition({appId: 'test'}),
        HttpModule,
        routing
    ],
    providers: [
        provideStore(AppState, window['data'])
    ],
    declarations: [AppComponent, Fruits, Landing],
    bootstrap: [AppComponent]
})
export class AppModule {}