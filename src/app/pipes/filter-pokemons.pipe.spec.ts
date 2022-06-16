import { FilterPokemonsPipe } from './filter-pokemons.pipe';

describe('FilterPokemonsPipe', () => {

  let filterPokemonsPipe: FilterPokemonsPipe;

  beforeEach(() => {
    filterPokemonsPipe = new FilterPokemonsPipe();
  });

  it('create an instance', () => {
    const pipe = new FilterPokemonsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return empty array if no items given', () => {
    const pokemons: any = [];

    const filtered = filterPokemonsPipe.transform(pokemons, '');

    expect(filtered.length).toBe(0);
    expect(filtered).toEqual([]);
  });

  it('should return empty array if no filter given', () => {
    const pokemons: any = [
      { name: 'pikachu' },
      { name: 'bulbasaur' },
      { name: 'charmander' }
    ];

    const filtered = filterPokemonsPipe.transform(pokemons, '');

    expect(filtered.length).toBe(3);
    expect(filtered).toEqual(pokemons);
  });

  it('should return filtered array', () => {
    const pokemons: any = [
      { name: 'pikachu' },
      { name: 'bulbasaur' },
      { name: 'charmander' }
    ];

    const filtered = filterPokemonsPipe.transform(pokemons, 'ch');

    expect(filtered.length).toBe(2);
    expect(filtered).toEqual([{ name: 'pikachu', }, { name: 'charmander' }]);
  });
});
