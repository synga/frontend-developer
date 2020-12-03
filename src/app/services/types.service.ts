import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  /**
   * Lista com tipos de pokémon para serem usados na badge, com suas respectivas cores e
   * cores de contraste para a font.
   * OBS: Removi os tipos 'unknown' e 'shadow' que a API retorna, mas não tem pokemons
   */
  public pokemonTypes: Map<number, { name: string, color: string, contrast: string }> = new Map([
    [0, { name: 'normal', color: '#A8A878', contrast: '#FFFFFF' }],
    [1, { name: 'fighting', color: '#C03028', contrast: '#FFFFFF' }],
    [2, { name: 'flying', color: '#A890F0', contrast: '#FFFFFF' }],
    [3, { name: 'poison', color: '#A040A0', contrast: '#FFFFFF' }],
    [4, { name: 'ground', color: '#E0C068', contrast: '#FFFFFF' }],
    [5, { name: 'rock', color: '#B8A038', contrast: '#FFFFFF' }],
    [6, { name: 'bug', color: '#A8B820', contrast: '#FFFFFF' }],
    [7, { name: 'ghost', color: '#705898', contrast: '#FFFFFF' }],
    [8, { name: 'steel', color: '#B8B8D0', contrast: '#FFFFFF' }],
    [9, { name: 'fire', color: '#F08030', contrast: '#FFFFFF' }],
    [10, { name: 'water', color: '#6890F0', contrast: '#FFFFFF' }],
    [11, { name: 'grass', color: '#78C850', contrast: '#FFFFFF' }],
    [12, { name: 'electric', color: '#F8D030', contrast: '#FFFFFF' }],
    [13, { name: 'psychic', color: '#F85888', contrast: '#FFFFFF' }],
    [14, { name: 'ice', color: '#98D8D8', contrast: '#FFFFFF' }],
    [15, { name: 'dragon', color: '#7038F8', contrast: '#FFFFFF' }],
    [16, { name: 'dark', color: '#705848', contrast: '#FFFFFF' }],
    [17, { name: 'fairy', color: '#EE99AC', contrast: '#FFFFFF' }]
  ]);

  constructor() { }
}