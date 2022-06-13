import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPokemonsPipe } from './pipes/filter-pokemons.pipe';
import { PokemonsListComponent } from './pokemons/pokemons-list/pokemons-list.component';
import { PokemonsSearchComponent } from './pokemons/pokemons-search/pokemons-search.component';
import { PokemonsCreateComponent } from './pokemons/pokemons-create/pokemons-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    HeaderComponent,
    FilterPokemonsPipe,
    PokemonsListComponent,
    PokemonsSearchComponent,
    PokemonsCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
