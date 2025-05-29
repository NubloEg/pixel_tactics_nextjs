import { makeAutoObservable } from "mobx";

export interface GameCard {
  id: string;
  title: string;
  player1: string;
  player2: string;
}

class GameCardsStore {
  gameCards: GameCard[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get getGameCards(): GameCard[] {
    return this.gameCards;
  }

  get isGamePlayer1(): number {
    return this.gameCards.length;
  }

  addGameCard(): void {
    this.gameCards.push({
      id: "2",
      player1: "Маха",
      player2: "Какаха",
      title: "Игра 2",
    });
  }
}

const gameCardsStore = new GameCardsStore();

console.log(gameCardsStore);

export default gameCardsStore;
