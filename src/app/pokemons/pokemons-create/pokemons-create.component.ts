import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemons-create',
  templateUrl: './pokemons-create.component.html',
  styleUrls: ['./pokemons-create.component.css']
})
export class PokemonsCreateComponent implements OnInit {

  pokemonForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initPokemonForm();
  }

  initPokemonForm() {
    this.pokemonForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      image: ['', [Validators.required, Validators.maxLength(250)]],
      attack: [0, Validators.required],
      defense: [0, Validators.required]
    })
  }

}
