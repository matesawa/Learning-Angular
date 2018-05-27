import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // add manually to handle ngModel inside HTML
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './servers/server/warning-alert/warning-alert.component';
import { WorkingAlertComponent } from './servers/server/working-alert/working-alert.component';
import { CursiveDirective } from './servers/server/cursive.directive';
import { ServerColorDirective } from './servers/server/serverColor.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    WorkingAlertComponent,
    CursiveDirective,
    ServerColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
