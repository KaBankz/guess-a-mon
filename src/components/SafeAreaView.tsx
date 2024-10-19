import { cssInterop } from 'nativewind';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

/*
 * NativeWind compatible SafeAreaView component
 */
export const SafeAreaView = cssInterop(RNSafeAreaView, { className: 'style' });
