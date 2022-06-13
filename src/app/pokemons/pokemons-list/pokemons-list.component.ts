import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { UpdatePokemon } from '../../models/update-pokemon.interface';
import { Pokemon } from '../../models/pokemons.interface';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {

  @Input() pokemons: Pokemon[] = [];
  @Input() searchText = '';
  @Output() pokemonDeleted = new EventEmitter<boolean>();
  isEdit = false;
  isDeleted = false;

  constructor(private readonly pokemonsService: PokemonsService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.searchText) {
      this.searchText = changes.searchText.currentValue;
    }

    if(changes.pokemons) {
      this.pokemons = changes.pokemons.currentValue;
    }
  }

  async updatePokemon(pokemon: Pokemon) {

    this.isEdit = !this.isEdit;

    const body: UpdatePokemon = {
      name: pokemon.name,
      image: pokemon.image,
      attack: pokemon.attack,
      defense: pokemon.defense
    }

    const updatePokemon: any = await this.pokemonsService.updatePokemon(pokemon.id, body);

    if (updatePokemon) {
      alert('El pokemon ha sido editado con éxito');
    }

  }

  async deletePokemon(id: number) {
    const deletePokemon = await this.pokemonsService.deletePokemon(id);

    if(deletePokemon) {
      this.isDeleted = true;
      this.pokemonDeleted.emit(this.isDeleted);
      alert('El Pokemon ha sido eliminado');
    }
  }

}
