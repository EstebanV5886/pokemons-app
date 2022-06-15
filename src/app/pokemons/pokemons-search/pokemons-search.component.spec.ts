import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PokemonsSearchComponent } from './pokemons-search.component';

describe('PokemonsSearchComponent', () => {
  let component: PokemonsSearchComponent;
  let fixture: ComponentFixture<PokemonsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ PokemonsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
