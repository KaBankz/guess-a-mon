import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import { Keyboard } from '@/components/Keyboard';
import { Pressable } from '@/components/Pressable';
import { SafeAreaView } from '@/components/SafeAreaView';
import { Text } from '@/components/Text';

const pokemonData = [
  {
    name: 'Pikachu',
    id: 25,
    hints: [
      'Yellow rodent with red cheeks',
      'Mascot of the franchise',
      "Ash's best friend",
      'Thunderbolt is its signature move',
    ],
  },
  {
    name: 'Charizard',
    id: 6,
    hints: [
      'Fire-breathing dragon',
      'Not actually a Dragon-type',
      'Final form of Charmander',
      "Ash's most powerful Pokémon",
    ],
  },
  {
    name: 'Bulbasaur',
    id: 1,
    hints: [
      'Seed Pokémon with a plant bulb',
      'Grass/Poison type starter',
      'Number 001 in the Pokédex',
      'Evolves into Ivysaur',
    ],
  },
  {
    name: 'Gyarados',
    id: 130,
    hints: [
      'Atrocious Pokémon',
      'Evolves from a weak fish',
      'Known for its Dragon Rage',
      'Water/Flying type',
    ],
  },
  {
    name: 'Mewtwo',
    id: 150,
    hints: [
      'Genetically engineered Pokémon',
      'Psychic-type Legendary',
      "Created from Mew's DNA",
      'Appeared in the first movie',
    ],
  },
];

const MAX_POKEMON_NAME_LENGTH = Math.max(
  ...pokemonData.map(pokemon => pokemon.name.length)
);

const GuessDisplay = ({
  guess,
  isCorrect,
  gameOver,
}: {
  guess: string;
  isCorrect: boolean;
  gameOver: boolean;
}) => {
  return (
    <View className='flex-row items-end gap-2'>
      {guess.length === 0 && !gameOver ? (
        <View className='size-10 border-b-2 border-indigo-300' />
      ) : (
        guess.split('').map((letter, index) => (
          <View
            key={index}
            className={`size-10 items-center justify-center border-b-2 ${
              isCorrect
                ? 'border-green-500'
                : gameOver
                  ? 'border-red-500'
                  : 'border-indigo-300'
            }`}>
            <Text
              className={`text-4xl font-bold capitalize ${
                isCorrect
                  ? 'text-green-600'
                  : gameOver
                    ? 'text-red-600'
                    : 'text-indigo-600'
              }`}>
              {letter}
            </Text>
          </View>
        ))
      )}
    </View>
  );
};

export default function Index() {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomPokemon =
      pokemonData[Math.floor(Math.random() * pokemonData.length)];
    setCurrentPokemon(randomPokemon);
    setCurrentHintIndex(0);
    setGuess('');
    setMessage('');
    setGameOver(false);
    setIsCorrect(false);
  };

  const handleGuess = () => {
    if (guess.toLowerCase() === currentPokemon.name.toLowerCase()) {
      setMessage(`Correct! It's ${currentPokemon.name}!`);
      setGameOver(true);
      setIsCorrect(true);
    } else {
      setMessage('Incorrect. Try again!');
      if (currentHintIndex < currentPokemon.hints.length - 1) {
        setCurrentHintIndex(currentHintIndex + 1);
      }
    }
  };

  const handleGiveUp = () => {
    setMessage('Better luck next time!');
    setGameOver(true);
  };

  const handleKeyPress = (key: string) => {
    if (gameOver) return;
    if (key === '←') {
      handleBackspace();
    } else if (guess.length < MAX_POKEMON_NAME_LENGTH) {
      setGuess(prevGuess => prevGuess + key);
    }
  };

  const handleBackspace = () => {
    setGuess(prevGuess => prevGuess.slice(0, -1));
  };

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <Text className='mb-8 text-center text-4xl font-extrabold text-indigo-600'>
        Guess<Text className='text-indigo-500'>•</Text>a
        <Text className='text-indigo-500'>•</Text>MON
      </Text>
      <View className='flex-1 items-center justify-between'>
        <View className='mb-8 w-full max-w-md rounded-3xl bg-white p-8 shadow-sm'>
          <Text className='text-center font-serif text-2xl italic'>
            " {currentPokemon?.hints[currentHintIndex]} "
          </Text>
        </View>

        <GuessDisplay guess={guess} isCorrect={isCorrect} gameOver={gameOver} />

        {gameOver && (
          <View className='mb-8 text-center'>
            {!isCorrect && (
              <Text className='mb-4 text-2xl font-bold text-indigo-600'>
                It was {currentPokemon.name}!
              </Text>
            )}
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemon.id}.png`}
              alt={currentPokemon.name}
              width={200}
              height={200}
              className='mx-auto mb-4'
            />
            <Pressable
              onPress={startNewGame}
              className='rounded-full bg-indigo-500 px-6 py-2 transition duration-200 active:bg-indigo-600'>
              <Text className='font-bold text-white'>Play Again</Text>
            </Pressable>
          </View>
        )}

        {message && (
          <Text className='mt-4 text-center text-lg font-semibold text-indigo-600'>
            {message}
          </Text>
        )}

        <View className='items-center gap-4'>
          <View className='flex-row gap-2'>
            <Pressable
              onPress={handleGuess}
              disabled={gameOver || guess.length === 0}
              className='rounded-full bg-indigo-500 px-6 py-2 transition duration-200 active:bg-indigo-600 disabled:opacity-50'>
              <Text className='font-bold text-white'>Guess</Text>
            </Pressable>

            <Pressable
              onPress={handleGiveUp}
              disabled={gameOver}
              className='rounded-full border-2 border-indigo-500 px-6 py-2 transition duration-200 active:bg-indigo-100'>
              <Text className='font-bold text-indigo-500'>Give Up</Text>
            </Pressable>
          </View>

          <Keyboard onPress={letter => handleKeyPress(letter)} />
        </View>
      </View>
    </SafeAreaView>
  );
}
