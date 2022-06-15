import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PokemonsListComponent } from './pokemons-list.component';
import { PokemonsService } from '../../services/pokemons.service';
import { FilterPokemonsPipe } from '../../pipes/filter-pokemons.pipe';


describe('PokemonsListComponent', () => {
  let component: PokemonsListComponent;
  let fixture: ComponentFixture<PokemonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PokemonsService],
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
});
