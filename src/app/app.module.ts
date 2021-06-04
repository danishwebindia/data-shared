import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeftpanelComponent } from './home/leftpanel/leftpanel.component';
import { RightpanelComponent } from './home/rightpanel/rightpanel.component';
import { CardsComponent } from './home/rightpanel/cards/cards.component';
import { CardComponent } from './home/rightpanel/cards/card/card.component';
import { ButtonsComponent } from './home/leftpanel/buttons/buttons.component';
import { ButtonComponent } from './home/leftpanel/buttons/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftpanelComponent,
    RightpanelComponent,
    CardsComponent,
    CardComponent,
    ButtonsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
