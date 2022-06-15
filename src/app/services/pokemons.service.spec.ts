import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsService } from './pokemons.service';
import { Pokemon } from '../models/pokemons.interface';

describe('PokemonsService', () => {
  let service: PokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PokemonsService]
    });
    service = TestBed.inject(PokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of Pokemons', async () => {
    const mockPokemon: Pokemon = {
      id: 1,
      name: 'bulbasaur',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      attack: 49,
      defense: 49,
      hp: 45,
      type: 'grass',
      idAuthor: 1,
    };
    const result = await service.getAllPokemons()
    expect(result).toBeInstanceOf(Array);
  });
});
