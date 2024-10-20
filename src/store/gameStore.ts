import { create } from 'zustand';

import type { Pokemon } from '@/types/Pokemon';

type GameState = {
  currentPokemon: Pokemon | undefined;
  currentHintIndex: number;
  guess: string;
  message: string;
  gameOver: boolean;
  isCorrect: boolean;
  startNewGame: (pokemonData: Pokemon[]) => void;
  handleGuess: (guess: string) => void;
  handleGiveUp: () => void;
  setGuess: (guess: string) => void;
  handleBackspace: () => void;
};

export const useGameStore = create<GameState>(set => ({
  currentPokemon: undefined,
  currentHintIndex: 0,
  guess: '',
  message: '',
  gameOver: false,
  isCorrect: false,

  startNewGame: (pokemonData: Pokemon[]) => {
    const randomPokemon =
      pokemonData[Math.floor(Math.random() * pokemonData.length)];
    set({
      currentPokemon: randomPokemon,
      currentHintIndex: 0,
      guess: '',
      message: '',
      gameOver: false,
      isCorrect: false,
    });
  },

  handleGuess: (guess: string) =>
    set(state => {
      if (guess.toLowerCase() === state.currentPokemon?.name.toLowerCase()) {
        return { message: 'Correct!', gameOver: true, isCorrect: true };
      }

      return {
        message: 'Nope, Try again!',
        currentHintIndex: Math.min(
          state.currentHintIndex + 1,
          Math.max((state.currentPokemon?.hints.length ?? 0) - 1, 0)
        ),
      };
    }),

  handleGiveUp: () =>
    set({
      message: 'Ha Ha! LOSER!',
      gameOver: true,
    }),

  setGuess: (newGuess: string) => set({ guess: newGuess }),

  handleBackspace: () =>
    set(state => ({
      guess: state.guess.slice(0, -1),
    })),
}));
