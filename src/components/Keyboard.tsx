import { Button, SizableText, XStack, YStack } from 'tamagui';

export const Keyboard = () => {
  return (
    <YStack alignItems='center' gap='$2'>
      <XStack gap='$2'>
        <KeyboardKey letter='q' />
        <KeyboardKey letter='w' />
        <KeyboardKey letter='e' />
        <KeyboardKey letter='r' />
        <KeyboardKey letter='t' />
        <KeyboardKey letter='y' />
        <KeyboardKey letter='u' />
        <KeyboardKey letter='i' />
        <KeyboardKey letter='o' />
        <KeyboardKey letter='p' />
      </XStack>
      <XStack gap='$2'>
        <KeyboardKey letter='a' />
        <KeyboardKey letter='s' />
        <KeyboardKey letter='d' />
        <KeyboardKey letter='f' />
        <KeyboardKey letter='g' />
        <KeyboardKey letter='h' />
        <KeyboardKey letter='j' />
        <KeyboardKey letter='k' />
        <KeyboardKey letter='l' />
      </XStack>
      <XStack gap='$2'>
        <KeyboardKey letter='z' />
        <KeyboardKey letter='x' />
        <KeyboardKey letter='c' />
        <KeyboardKey letter='v' />
        <KeyboardKey letter='b' />
        <KeyboardKey letter='n' />
        <KeyboardKey letter='m' />
      </XStack>
    </YStack>
  );
};

const KeyboardKey = ({ letter }: { letter: string }) => {
  return (
    <Button backgroundColor='$accentBackground' padding='$2' borderRadius='$5'>
      <SizableText textTransform='capitalize' fontSize='$8' fontWeight='bold'>
        {letter}
      </SizableText>
    </Button>
  );
};
