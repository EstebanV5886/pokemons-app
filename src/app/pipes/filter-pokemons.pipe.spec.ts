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

    const filtered = filterPokemonsPipe.transform(pokemons, 'pikachu');

    expect(filtered.length).toBe(0);
    expect(filtered).toEqual([]);
  });
});
