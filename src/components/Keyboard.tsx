import { Button, SizableText, XStack, YStack } from 'tamagui';

export const Keyboard = () => {
  const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '←'],
  ];

  return (
    <YStack alignItems='center' gap='$2'>
      {keys.map((row, i) => (
        <XStack key={i} gap='$2'>
          {row.map((letter) => (
            <KeyboardKey key={letter} letter={letter} />
          ))}
        </XStack>
      ))}
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
