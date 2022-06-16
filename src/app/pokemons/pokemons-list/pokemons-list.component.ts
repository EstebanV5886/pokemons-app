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
  enableEditIndex = 0;

  constructor(private readonly pokemonsService: PokemonsService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.searchText) {
      this.searchText = changes.searchText.currentValue;
    }

    if (changes.pokemons) {
      this.pokemons = changes.pokemons.currentValue;
    }
  }

  async updatePokemon(pokemon: Pokemon) {

    const onePokemon = await this.getOnePokemon(pokemon.id);

    if (JSON.stringify(onePokemon) === JSON.stringify(pokemon)) {
      alert('No se ha realizado ningún cambio');
      this.isEdit = false;
      return;
    }

    const body: UpdatePokemon = {
      name: pokemon.name,
      image: pokemon.image,
      attack: pokemon.attack,
      defense: pokemon.defense,
      type: pokemon.type,
      hp: pokemon.hp,
      idAuthor: 1,
    };

    const updatePokemon: any = await this.pokemonsService.updatePokemon(pokemon.id, body);

    if (updatePokemon.success === false) {
      this.isEdit = false;
      alert('El Pokemon no se ha podido actualizar');
      return;
    }

    alert('El pokemon ha sido editado con éxito');
    this.isEdit = false;
  }

  async deletePokemon(id: number) {
    const text = '¿Estás seguro de que quieres eliminar este pokemon?';

    if (confirm(text) === true) {

      const deletePokemon: any = await this.pokemonsService.deletePokemon(id);

      if (deletePokemon.success === false) {
        this.isDeleted = false;
        alert('El Pokemon no se ha podido eliminar');
      } else {
        this.isDeleted = true;
        this.pokemonDeleted.emit(this.isDeleted);
        alert('El Pokemon ha sido eliminado');
      }

    }

  }

  enableEdit(index: number) {
    this.isEdit = true;
    this.enableEditIndex = index;
  }

  async getOnePokemon(id: number) {
    const pokemon = await this.pokemonsService.getOnePokemon(id);

    return pokemon;
  }

}
