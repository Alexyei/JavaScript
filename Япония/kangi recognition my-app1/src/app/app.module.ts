import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChildComponent} from "./child.component";
import {FormsModule} from "@angular/forms";
import {KanjiRecognitionComponent} from "./lib/kanji-recognition.component";

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,KanjiRecognitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
