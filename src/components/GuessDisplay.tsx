import { View } from 'react-native';

import { Text } from '@/components/Text';
import { cn } from '@/utils/cn';

export const GuessDisplay = ({
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
