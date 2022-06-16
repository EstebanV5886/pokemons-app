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
    const result = await service.getAllPokemons()
    expect(result).toBeInstanceOf(Array);
  });
});
