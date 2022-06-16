import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../models/pokemons.interface';
import { UpdatePokemon } from '../models/update-pokemon.interface';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  @Input() searchText = '';
  pokemons: Pokemon[] = [];
  isEdit = false;
  isDelete = false;


  constructor(private readonly pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  async getAllPokemons() {
    this.pokemons = await this.pokemonsService.getAllPokemons() as Pokemon[];
  }

  getSearchString(searchString: string) {
    this.searchText = searchString;
  }

  isPokemonDeleted(deleted: boolean) {
    if (deleted) {
      this.getAllPokemons();
    }
  }

  isPokemonCreated(created: boolean) {
    if (created) {
      this.getAllPokemons();
    }
  }

}
