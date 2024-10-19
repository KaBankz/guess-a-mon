import { View } from 'react-native';

import { Pressable } from '@/components/Pressable';
import { Text } from '@/components/Text';

export const Keyboard = () => {
  const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '←'],
  ];

  return (
    <View className='items-center space-y-2'>
      {keys.map((row, i) => (
        <View key={i} className='flex-row space-x-2'>
          {row.map(letter => (
            <KeyboardKey key={letter} letter={letter} />
          ))}
        </View>
      ))}
    </View>
  );
};

const KeyboardKey = ({ letter }: { letter: string }) => {
  return (
    <Pressable className='rounded bg-current p-2'>
      <Text className='text-lg font-bold capitalize'>{letter}</Text>
    </Pressable>
  );
};
