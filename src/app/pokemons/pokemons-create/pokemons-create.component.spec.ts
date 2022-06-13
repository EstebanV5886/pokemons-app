import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsCreateComponent } from './pokemons-create.component';

describe('PokemonsCreateComponent', () => {
  let component: PokemonsCreateComponent;
  let fixture: ComponentFixture<PokemonsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
});
