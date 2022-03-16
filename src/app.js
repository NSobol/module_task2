import Games, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

const game = new Games();
game.start();
