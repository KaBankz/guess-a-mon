import { View } from 'react-native';

import { Keyboard } from '@/components/Keyboard';
import { SafeAreaView } from '@/components/SafeAreaView';
import { Text } from '@/components/Text';

export default function Index() {
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 items-center justify-between'>
        <View>
          <Text className='text-4xl'>"</Text>
          <Text className='text-2xl'>It has fangs</Text>
          <Text className='text-2xl'>It has ugly pink lips</Text>
          <Text className='text-4xl'>"</Text>
        </View>
        <View className='flex-row items-end gap-2'>
          {['S', 'E', 'A', 'K', 'I', 'N', 'G', 'G', 'G', 'G'].map(
            (letter, index) => (
              <View key={index} className='items-center'>
                <Text className='text-3xl'>{letter}</Text>
                <View className='h-0.5 w-2 rounded bg-black' />
              </View>
            )
          )}
        </View>
        <Keyboard />
      </View>
    </SafeAreaView>
  );
}
