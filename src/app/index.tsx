import { View } from 'react-native';

import { Keyboard } from '@/components/Keyboard';
import { SafeAreaView } from '@/components/SafeAreaView';
import { Text } from '@/components/Text';

export default function Index() {
  const isCorrect = false;
  const gameOver = false;

  return (
    <SafeAreaView className='flex-1'>
      <Text className='mb-8 text-center text-4xl font-extrabold text-indigo-600'>
        Guess<Text className='text-indigo-500'>•</Text>a
        <Text className='text-indigo-500'>•</Text>MON
      </Text>
      <View className='flex-1 items-center justify-between'>
        <View className='mb-8 w-full max-w-md rounded-3xl bg-white p-8 shadow-sm'>
          <Text className='text-center font-serif text-2xl italic'>
            " It's the king of the sea "
          </Text>
        </View>

        <View className='flex-row items-end gap-2'>
          {['S', 'E', 'A', 'K', 'I', 'N', 'G'].map((letter, index) => (
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
                className={`text-4xl font-bold ${
                  isCorrect
                    ? 'text-green-600'
                    : gameOver
                      ? 'text-red-600'
                      : 'text-indigo-600'
                }`}>
                {letter}
              </Text>
            </View>
          ))}
        </View>
        <Keyboard />
      </View>
    </SafeAreaView>
  );
}
