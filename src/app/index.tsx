import { Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Keyboard } from '@/components/Keyboard';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{ fontSize: 40 }}>'"'</Text>
          <Text style={{ fontSize: 32 }}>It has fangs</Text>
          <Text style={{ fontSize: 32 }}>It has ugly pink lips</Text>
          <Text style={{ fontSize: 40 }}>'"'</Text>
        </View>
        <View style={{ gap: 8, alignItems: 'flex-end' }}>
          {['S', 'E', 'A', 'K', 'I', 'N', 'G', 'G', 'G', 'G'].map(
            (letter, index) => (
              <View key={index} style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 36 }}>{letter}</Text>
                <View
                  style={{
                    height: 2,
                    width: 8,
                    borderRadius: 4,
                    backgroundColor: '#000',
                  }}
                />
              </View>
            )
          )}
        </View>
        <Keyboard />
      </View>
    </SafeAreaView>
  );
}
