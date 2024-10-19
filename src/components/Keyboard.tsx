import { Pressable, Text, View } from 'react-native';

export const Keyboard = () => {
  const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '←'],
  ];

  return (
    <View style={{ alignItems: 'center', gap: 8 }}>
      {keys.map((row, i) => (
        <View key={i} style={{ flexDirection: 'row', gap: 8 }}>
          {row.map((letter) => (
            <KeyboardKey key={letter} letter={letter} />
          ))}
        </View>
      ))}
    </View>
  );
};

const KeyboardKey = ({ letter }: { letter: string }) => {
  return (
    <Pressable
      style={{
        backgroundColor: '#accentBackground',
        padding: 8,
        borderRadius: 5,
      }}
    >
      <Text
        style={{
          textTransform: 'capitalize',
          fontSize: 16,
          fontWeight: 'bold',
        }}
      >
        {letter}
      </Text>
    </Pressable>
  );
};
