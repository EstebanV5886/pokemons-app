import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemons.interface';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[] = [];
  pokemon!: Pokemon;

  constructor(private readonly pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  async getAllPokemons() {
    this.pokemons = await this.pokemonsService.getAllPokemons() as Pokemon[];
  }

  async getOnePokemon(id: number) {
    this.pokemon = await this.pokemonsService.getOnePokemon(id) as Pokemon;
  }



}
