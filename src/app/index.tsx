import { SafeAreaView } from 'react-native-safe-area-context';
import { Square, Text, XStack, YStack } from 'tamagui';
import { Keyboard } from '../components/Keyboard';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack flex={1} justifyContent='space-between' alignItems='center'>
        <YStack>
          <Text fontSize='$10'>"</Text>
          <Text fontSize='$8'>It has fangs</Text>
          <Text fontSize='$8'>It has ugly pink lips</Text>
          <Text fontSize='$10'>"</Text>
        </YStack>
        <XStack gap='$2' alignItems='flex-end'>
          <YStack alignItems='center'>
            <Text fontSize='$10'>S</Text>
            <Square
              height='$0.5'
              width='$5'
              circular
              backgroundColor='$color'
            />
          </YStack>
          <Square height='$0.5' width='$5' circular backgroundColor='$color' />
          <Square height='$0.5' width='$5' circular backgroundColor='$color' />
        </XStack>
        <Keyboard />
      </YStack>
    </SafeAreaView>
  );
}
