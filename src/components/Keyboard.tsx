import { View } from 'react-native';

import { Pressable } from '@/components/Pressable';
import { Text } from '@/components/Text';

type KeyboardProps = {
  onPress: (letter: string) => void;
};

export const Keyboard = ({ onPress }: KeyboardProps) => {
  const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '←'],
  ];

  return (
    <View className='items-center justify-center rounded-3xl bg-white/80 py-2 shadow-sm dark:bg-neutral-900'>
      {keys.map((row, i) => (
        <View key={i} className='mb-2 flex-row justify-center'>
          {row.map(letter => (
            <Pressable
              onPress={() => onPress(letter)}
              key={letter}
              className='m-1 size-10 items-center justify-center rounded-xl bg-white shadow-sm transition duration-200 active:scale-95 active:bg-indigo-100 disabled:opacity-50 dark:bg-neutral-600 dark:active:bg-indigo-600'>
              <Text className='text-2xl font-semibold capitalize text-indigo-600'>
                {letter}
              </Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};
