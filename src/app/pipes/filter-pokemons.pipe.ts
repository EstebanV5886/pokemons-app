import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemons'
})
export class FilterPokemonsPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) {
      return [];
    }

    if(!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    return items.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchText);
    });
  }

}
