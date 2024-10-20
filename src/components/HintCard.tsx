import { View } from 'react-native';

import { Text } from '@/components/Text';

export const HintCard = ({ hint }: { hint: string }) => {
  return (
    <View className='w-full rounded-3xl bg-white p-8 shadow-sm web:max-w-lg dark:bg-neutral-900'>
      <Text className='text-left text-xl font-semibold'>"</Text>
      <Text className='text-center font-serif text-2xl italic'>{hint}</Text>
      <Text className='text-right text-xl font-semibold'>"</Text>
    </View>
  );
};
