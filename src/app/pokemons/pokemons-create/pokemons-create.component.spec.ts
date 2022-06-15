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
});
