import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pokemon } from '../models/pokemons.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private readonly http: HttpClient) { }

  getAllPokemons() {
    const url = `${environment.urlPokemons}?idAuthor=1`;

    return new Promise((resolve, reject) => {

      this.http.get<Pokemon>(url).subscribe((pokemons: Pokemon) => {

        resolve(pokemons);

      }, reject);
    });
  }

  getOnePokemon(id: number) {
    const url = `${environment.urlPokemons}${id}`;

    return new Promise((resolve, reject) => {

      this.http.get<Pokemon>(url).subscribe((pokemon: Pokemon) => {

        resolve(pokemon);

      }, reject);
    });
  }
}
