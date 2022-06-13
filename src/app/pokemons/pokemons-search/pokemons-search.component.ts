import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemons-search',
  templateUrl: './pokemons-search.component.html',
  styleUrls: ['./pokemons-search.component.css']
})
export class PokemonsSearchComponent implements OnInit {

  @Output() emitSearchText = new EventEmitter<string>();
  searchText = '';

  constructor() {}

  ngOnInit(): void {}

  getSearchText(e: string) {
    this.searchText = e;
    return this.emitSearchText.emit(this.searchText);
  }

}
