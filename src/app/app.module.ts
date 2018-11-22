import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule, MatMenuModule, MatIconModule, MatButtonModule, MatCardModule } from '@angular/material';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabsComponent,

  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
