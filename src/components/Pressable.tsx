import { forwardRef, useCallback } from 'react';
import {
  Platform,
  Pressable as RNPressable,
  type GestureResponderEvent,
  type PressableProps,
  type View,
} from 'react-native';

import * as Haptics from 'expo-haptics';

/**
 * Pressable component with haptic feedback
 */
export const Pressable = forwardRef<View, PressableProps>(
  ({ onPressIn, ...props }, ref) => {
    const onPressInHandler = useCallback(
      (event: GestureResponderEvent) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPressIn?.(event);
      },
      [onPressIn]
    );

    return (
      <RNPressable
        ref={ref}
        onPressIn={Platform.OS !== 'web' ? onPressInHandler : onPressIn}
        {...props}
      />
    );
  }
);
