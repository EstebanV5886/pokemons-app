import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemons-create',
  templateUrl: './pokemons-create.component.html',
  styleUrls: ['./pokemons-create.component.css']
})
export class PokemonsCreateComponent implements OnInit {

  @Output() pokemonCreated = new EventEmitter<boolean>();
  pokemonForm!: FormGroup;
  isCreated = false;

  constructor(private readonly formBuilder: FormBuilder, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.initPokemonForm();
  }

  initPokemonForm() {
    this.pokemonForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      image: ['', [Validators.required, Validators.maxLength(250)]],
      attack: [0, [Validators.required, Validators.min(1), Validators.max(100)]],
      defense: [0, [Validators.required, Validators.min(1), Validators.max(100)]],
      hp: [0, [Validators.required, Validators.min(1), Validators.max(100)]],
      type: ['', [Validators.required, Validators.maxLength(50)]],
    })
  }

  get hp() {
    return this.pokemonForm.get('hp') as FormGroup;
  }

  async createPokemon() {
    this.isCreated = true;

    const dataPokemon = {
      name: this.pokemonForm.controls.name.value,
      image: this.pokemonForm.controls.image.value,
      attack: this.pokemonForm.controls.attack.value,
      defense: this.pokemonForm.controls.defense.value,
      hp: this.pokemonForm.controls.hp.value,
      type: this.pokemonForm.controls.type.value,
      idAuthor: 1
    };

    const create: any = await this.pokemonsService.createPokemon(dataPokemon);

    if (create.success === false) {
      this.isCreated = false;
      alert('Error al crear el pokemon');
    } else {
      this.pokemonCreated.emit(this.isCreated);
      this.clearForm();
      alert('Pokemon creado con éxito');
    }
  }

  cancel() {
    this.clearForm();
  }

  clearForm() {
    this.pokemonForm.get('name')?.setValue('');
    this.pokemonForm.get('image')?.setValue('');
    this.pokemonForm.get('attack')?.setValue(0);
    this.pokemonForm.get('defense')?.setValue(0);
    this.pokemonForm.get('hp')?.setValue(0);
    this.pokemonForm.get('type')?.setValue('');
  }

}
