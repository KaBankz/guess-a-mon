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
            <Text fontSize='$9'>S</Text>
            <Square
              height='$0.5'
              width='$2'
              circular
              backgroundColor='$color'
            />
          </YStack>
          <YStack alignItems='center'>
            <Text fontSize='$9'>E</Text>
            <Square
              height='$0.5'
              width='$2'
              circular
              backgroundColor='$color'
            />
          </YStack>
          <YStack alignItems='center'>
            <Text fontSize='$9'>A</Text>
            <Square
              height='$0.5'
              width='$2'
              circular
              backgroundColor='$color'
            />
          </YStack>
          <YStack alignItems='center'>
            <Text fontSize='$9'>K</Text>
            <Square
              height='$0.5'
              width='$2'
              circular
              backgroundColor='$color'
            />
          </YStack>
          <YStack alignItems='center'>
            <Text fontSize='$9'>I</Text>
            <Square
              height='$0.5'
              width='$2'
              circular
              backgroundColor='$color'
            />
          </YStack>
          <YStack alignItems='center'>
            <Text fontSize='$9'>N</Text>
            <Square
              height='$0.5'
              width='$2'
              circular
              backgroundColor='$color'
            />
          </YStack>
          <YStack alignItems='center'>
            <Text fontSize='$9'>G</Text>
            <Square
              height='$0.5'
              width='$2'
              circular
              backgroundColor='$color'
            />
          </YStack>
          <YStack alignItems='center'>
            <Text fontSize='$9'>G</Text>
            <Square
              height='$0.5'
              width='$2'
              circular
              backgroundColor='$color'
            />
          </YStack>
          <YStack alignItems='center'>
            <Text fontSize='$9'>G</Text>
            <Square
              height='$0.5'
              width='$2'
              circular
              backgroundColor='$color'
            />
          </YStack>
          <YStack alignItems='center'>
            <Text fontSize='$9'>G</Text>
            <Square
              height='$0.5'
              width='$2'
              circular
              backgroundColor='$color'
            />
          </YStack>
        </XStack>
        <Keyboard />
      </YStack>
    </SafeAreaView>
  );
}
