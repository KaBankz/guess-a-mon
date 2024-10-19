import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack } from 'tamagui';
import { Keyboard } from '../components/Keyboard';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack flex={1} justifyContent='flex-end' alignItems='center'>
        <Keyboard />
      </YStack>
    </SafeAreaView>
  );
}
