import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Pokemon } from '../models/pokemons.interface';
import { UpdatePokemon } from '../models/update-pokemon.interface';
import { CreatePokemon } from '../models/create-pokemon.interface';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService implements OnDestroy {

  subscription: Subscription = new Subscription();

  constructor(private readonly http: HttpClient) { }

  getAllPokemons() {
    const url = `${environment.urlPokemons}?idAuthor=1`;

    return new Promise((resolve, reject) => {

      this.subscription = this.http.get<Pokemon>(url).subscribe((pokemons: Pokemon) => {

        resolve(pokemons);

      }, reject);
    });
  }

  getOnePokemon(id: number) {
    const url = `${environment.urlPokemons}${id}`;

    return new Promise((resolve, reject) => {

      this.subscription = this.http.get<Pokemon>(url).subscribe((pokemon: Pokemon) => {

        resolve(pokemon);

      }, reject);
    });
  }

  createPokemon(body: CreatePokemon) {
    const url = `${environment.urlPokemons}?idAuthor=1`;

    return new Promise((resolve, reject) => {

      this.subscription = this.http.post<any>(url, body).subscribe((result: any) => {

        resolve(result);

      }, reject);

    });
  }

  updatePokemon(id: number, body: UpdatePokemon): Promise<Pokemon> {
    const url = `${environment.urlPokemons}${id}`;

    return new Promise((resolve, reject) => {

      this.subscription = this.http.put<any>(url, body).subscribe((result: any) => {

        resolve(result);

      }, reject);

    });
  }

  deletePokemon(id: number) {
    const url = `${environment.urlPokemons}${id}`;

    return new Promise((resolve, reject) => {

      this.subscription = this.http.delete<any>(url).subscribe((result: any) => {

        resolve(result);

      }, reject);

    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
