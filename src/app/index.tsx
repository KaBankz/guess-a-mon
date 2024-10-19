import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Image } from 'expo-image';

import { Button } from '@/components/Button';
import { Keyboard } from '@/components/Keyboard';
import { SafeAreaView } from '@/components/SafeAreaView';
import { Text } from '@/components/Text';
import pokemonData from '@/constants/data.json';
import { cn } from '@/utils/cn';

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
            className={cn(
              'size-10 items-center justify-center border-b-2',
              isCorrect
                ? 'border-green-500'
                : gameOver
                  ? 'border-red-500'
                  : 'border-indigo-300'
            )}>
            <Text
              className={cn(
                'text-4xl font-bold capitalize',
                isCorrect
                  ? 'text-green-600'
                  : gameOver
                    ? 'text-red-600'
                    : 'text-indigo-600'
              )}>
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
    <SafeAreaView className='flex-1 bg-white dark:bg-black'>
      <Text className='mb-8 text-center text-4xl font-extrabold text-indigo-600 dark:text-indigo-400'>
        Guess<Text className='text-indigo-500 dark:text-indigo-600'>•</Text>a
        <Text className='text-indigo-500 dark:text-indigo-600'>•</Text>MON
      </Text>
      <View className='flex-1 items-center justify-between'>
        <View className='mb-8 w-full max-w-md rounded-3xl bg-white p-8 shadow-sm dark:bg-neutral-900'>
          <Text className='text-center font-serif text-2xl italic'>
            " {currentPokemon?.hints[currentHintIndex]} "
          </Text>
        </View>

        {message ? (
          <Text className='mt-4 text-center text-xl font-semibold text-indigo-600'>
            {message}
          </Text>
        ) : null}

        <View className='mb-8 items-center'>
          {gameOver ? (
            <>
              {!isCorrect ? (
                <Text className='mb-4 text-2xl font-bold text-indigo-600'>
                  It was {currentPokemon.name}!
                </Text>
              ) : null}
              <Image
                source={currentPokemon.artwork}
                alt={currentPokemon.name}
                style={{ width: 200, height: 200 }}
                className='mx-auto mb-4'
              />
            </>
          ) : null}
        </View>

        <View className='items-center gap-8'>
          <GuessDisplay
            guess={guess}
            isCorrect={isCorrect}
            gameOver={gameOver}
          />

          <View className='flex-row gap-2'>
            {!gameOver ? (
              <>
                <Button
                  text='Guess'
                  onPress={handleGuess}
                  disabled={gameOver || guess.length === 0}
                />

                <Button
                  variant='outline'
                  text='Give Up'
                  onPress={handleGiveUp}
                  disabled={gameOver}
                />
              </>
            ) : (
              <Button text='Play Again' onPress={startNewGame} />
            )}
          </View>

          <Keyboard onPress={letter => handleKeyPress(letter)} />
        </View>
      </View>
    </SafeAreaView>
  );
}
