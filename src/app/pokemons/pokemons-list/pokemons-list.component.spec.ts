import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PokemonsListComponent } from './pokemons-list.component';
import { PokemonsService } from '../../services/pokemons.service';
import { FilterPokemonsPipe } from '../../pipes/filter-pokemons.pipe';
import { Pokemon } from '../../models/pokemons.interface';
import { UpdatePokemon } from '../../models/update-pokemon.interface';


describe('PokemonsListComponent', () => {
  let component: PokemonsListComponent;
  let fixture: ComponentFixture<PokemonsListComponent>;
  let mockPokemonsService: Partial<PokemonsService>;

  mockPokemonsService = {
    getAllPokemons: jasmine.createSpy('getAllPokemons')
      .and.returnValue(Promise.resolve([])),
    getOnePokemon: jasmine.createSpy('getOnePokemon')
      .and.returnValue(Promise.resolve({} as Pokemon)),
    updatePokemon: jasmine.createSpy('updatePokemon')
      .and.returnValue(Promise.resolve({} as Pokemon)),
    deletePokemon: jasmine.createSpy('deletePokemon')
      .and.returnValue(Promise.resolve({} as Pokemon)),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PokemonsService, {
        provide: PokemonsService,
        useValue: mockPokemonsService
      }],
      declarations: [PokemonsListComponent, FilterPokemonsPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of pokemons', () => {
    expect(component.pokemons).toBeInstanceOf(Array);
  });

  it('should update a pokemon', () => {
    const pokemon = {
      id: 1,
      name: 'Bulbasaur',
      type:'Poison',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      attack: 49,
      defense: 49,
      hp: 45,
      idAuthor: 1
    };
    expect(component.updatePokemon(pokemon)).toBeDefined();
  });

  it('should delete a pokemon', () => {
    expect(component.deletePokemon(1)).toBeDefined();
  });
});
