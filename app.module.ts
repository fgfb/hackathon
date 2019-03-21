import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSlideToggleModule  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
