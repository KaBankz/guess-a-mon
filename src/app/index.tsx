import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useQuery } from '@tanstack/react-query';
import { Image } from 'expo-image';
import * as SplashScreen from 'expo-splash-screen';

import { Button } from '@/components/Button';
import { GuessDisplay } from '@/components/GuessDisplay';
import { HintCard } from '@/components/HintCard';
import { Keyboard } from '@/components/Keyboard';
import { SafeAreaView } from '@/components/SafeAreaView';
import { Text } from '@/components/Text';
import { useGameStore } from '@/store/gameStore';
import type { Pokemon } from '@/types/Pokemon';

const fetchPokemon = async () => {
  const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/pokemon`);

  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon data');
  }

  return response.json() as Promise<Pokemon[]>;
};

const MAX_POKEMON_NAME_LENGTH = 12;

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const {
    currentPokemon,
    currentHintIndex,
    guess,
    message,
    gameOver,
    isCorrect,
    startNewGame,
    handleGuess,
    handleGiveUp,
    setGuess,
    handleBackspace,
  } = useGameStore();

  const { data, isLoading, error, isFetched } = useQuery({
    queryKey: ['pokemon'],
    queryFn: fetchPokemon,
  });

  useEffect(() => {
    if (isFetched && !isLoading) {
      SplashScreen.hideAsync();
    }
  }, [isFetched, isLoading]);

  useEffect(() => {
    if (data) startNewGame(data);
  }, [data, startNewGame]);

  const handleKeyPress = (key: string) => {
    if (gameOver) return;

    if (key === '←') {
      handleBackspace();
    } else if (guess.length < MAX_POKEMON_NAME_LENGTH) {
      setGuess(guess + key);
    }
  };

  if (error) {
    return (
      <SafeAreaView className='flex-1 items-center justify-center'>
        <Text className='text-xl font-bold'>Failed to fetch Pokémon data</Text>
      </SafeAreaView>
    );
  }

  if (isLoading || !data) {
    return (
      <SafeAreaView className='flex-1 items-center justify-center'>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className='flex-1 web:my-4 web:overflow-scroll'>
      <Text className='mb-8 text-center text-4xl font-extrabold text-indigo-600 dark:text-indigo-400'>
        Guess<Text className='text-indigo-500 dark:text-indigo-600'>•</Text>a
        <Text className='text-indigo-500 dark:text-indigo-600'>•</Text>MON
      </Text>

      <View className='flex-1 items-center justify-between'>
        <HintCard hint={currentPokemon?.hints[currentHintIndex]!} />
        <Text className='mt-4 text-center text-xl font-semibold text-indigo-600'>
          {message}
        </Text>

        <View className='grow items-center'>
          {gameOver ? (
            <>
              {!isCorrect ? (
                <Text className='mb-4 text-2xl font-bold text-indigo-600'>
                  It was {currentPokemon?.name}!
                </Text>
              ) : null}
              <Image
                source={currentPokemon?.artwork}
                alt={currentPokemon?.name}
                style={{ width: 150, height: 150 }}
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
                  onPress={() => handleGuess(guess)}
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
              <Button text='Play Again' onPress={() => startNewGame(data)} />
            )}
          </View>

          <Keyboard
            onPress={letter => handleKeyPress(letter)}
            disabled={gameOver}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
