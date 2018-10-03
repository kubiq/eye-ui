import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { WebsocketService } from './service/service.service';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    WebsocketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
