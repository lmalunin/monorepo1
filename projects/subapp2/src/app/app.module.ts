import {ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class App2SharedModule {
  static forRoot(): ModuleWithProviders<App2SharedModule> {
    return {
      ngModule: App2SharedModule,
      providers: []
    }
  }
}
