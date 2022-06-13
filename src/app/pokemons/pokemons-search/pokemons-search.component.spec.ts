import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsSearchComponent } from './pokemons-search.component';

describe('PokemonsSearchComponent', () => {
  let component: PokemonsSearchComponent;
  let fixture: ComponentFixture<PokemonsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
