import { Text as RNText } from 'react-native';

import { cn } from '@/utils/cn';

import type { TextProps } from 'react-native';

/**
 * Theme aware `Text` component
 */
export const Text = ({ className, ...props }: TextProps) => {
  return (
    <RNText
      className={cn('text-black dark:text-white', className)}
      {...props}
    />
  );
};
