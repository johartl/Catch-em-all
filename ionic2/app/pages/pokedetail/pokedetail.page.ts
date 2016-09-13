import { forwardRef } from '@angular/core';
import { Page, NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../services/api.service';
import { Pokemon } from "../../models/pokemon";

@Page({
  templateUrl: 'pages/pokedetail/pokedetail.page.html',
})
export class PokeDetailPage {

  pokemonId: number;
  pokemonData: Pokemon;

  constructor(private navCtrl: NavController, navParams: NavParams, private apiservice: ApiService) {
    this.pokemonId = navParams.get('pokemonId');
    this.apiservice.getPokemonById(this.pokemonId).subscribe(results => this.pokemonData = results, error => this.pokemonData = null);
  }

}
