import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Lib1Module, Lib1Service } from 'mzx-test1/dist/lib1';
import { Observable, of } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * lib component uses Lib1Service which is overriden by service2
 */
export class Service2 {
  getstring(): Observable<string> {
    return of('override')
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Lib1Module
  ],
  providers: [{provide: Lib1Service, useClass: Service2}],
  bootstrap: [AppComponent]
})
export class AppModule {}
