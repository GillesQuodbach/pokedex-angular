import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";
import { DatePipe, NgFor, NgIf } from "@angular/common";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    NgFor,
    BorderCardDirective,
    DatePipe,
    PokemonTypeColorPipe,
  ],
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent implements OnInit {
  title = "ng-pokemon-app";
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );

    if (pokemon) {
      console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Votre pokémon n'existe pas`);
      this.pokemonSelected = pokemon;
    }
  }
}
