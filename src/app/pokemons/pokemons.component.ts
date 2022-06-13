import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../models/pokemons.interface';
import { UpdatePokemon } from '../models/update-pokemon.interface';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit, OnChanges {

  pokemons: Pokemon[] = [];
  pokemon!: Pokemon;
  isEdit = false;
  isDelete = false;
  @Input() searchText = '';

  constructor(private readonly pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes pokemons component', changes);
  }

  async getAllPokemons() {
    this.pokemons = await this.pokemonsService.getAllPokemons() as Pokemon[];
  }

  async getOnePokemon(id: number) {
    this.pokemon = await this.pokemonsService.getOnePokemon(id) as Pokemon;
  }

  async deletePokemon(id: number) {
    const deletePokemon = await this.pokemonsService.deletePokemon(id);

    return deletePokemon;
  }

  getSearchString(searchString: string) {
    this.searchText = searchString;
  }

  isPokemonDeleted(deleted: boolean) {
    if (deleted) {
      this.getAllPokemons();
    }
  }

}
