import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UIRouterModule } from "ui-router-ng2";
import { HttpModule } from '@angular/http';

/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';
 
/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import { AddressComponent }   from './address/address.component';
import { ResultComponent }    from './result/result.component';
import { AttributeComponent } from './attribute/attribute.component';
import { NumberSpinnerComponent } from './shared/number-spinner.component';
import { DualListComponent } from './shared/dual-list.component';

/* App Router */
import { UIRouterConfigFn }   from "./app.router";
import { appStates }          from "./app.states";
 
/* Shared Service */
import { CharacterDataService }    from './data/characterData.service'
import { FeatDataService } from './data/featData.service';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, PersonalComponent, WorkComponent, AddressComponent, ResultComponent, AttributeComponent, NumberSpinnerComponent, DualListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UIRouterModule.forRoot({
      states: appStates,
      useHash: true,
      config: UIRouterConfigFn
    })
  ],
  providers: [{provide: CharacterDataService, useClass: CharacterDataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }