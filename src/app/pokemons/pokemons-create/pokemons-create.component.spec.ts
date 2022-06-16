import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { PokemonsCreateComponent } from './pokemons-create.component';

describe('PokemonsCreateComponent', () => {
  let component: PokemonsCreateComponent;
  let fixture: ComponentFixture<PokemonsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule],
      declarations: [ PokemonsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with 6 controls', () => {
    expect(component.pokemonForm.contains('name')).toBeTruthy();
    expect(component.pokemonForm.contains('image')).toBeTruthy();
    expect(component.pokemonForm.contains('attack')).toBeTruthy();
    expect(component.pokemonForm.contains('defense')).toBeTruthy();
    expect(component.pokemonForm.contains('hp')).toBeTruthy();
    expect(component.pokemonForm.contains('type')).toBeTruthy();
  });

  it('should create a new Pokemon', () => {
    const pokemon = {
      name: 'Pikachu',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      attack: 55,
      defense: 40,
      hp: 35,
      type: 'Electric'
    };
    component.pokemonForm.setValue(pokemon);
    component.createPokemon();
    expect(component.pokemonForm.value).toEqual(pokemon);
  });
});
