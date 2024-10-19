import type { PressableProps } from 'react-native';

import { cva, type VariantProps } from 'class-variance-authority';

import { Pressable } from '@/components/Pressable';
import { Text } from '@/components/Text';
import { cn } from '@/utils/cn';

const ButtonVariants = cva(
  'group/button items-center justify-center rounded-full px-6 py-2 transition duration-200 active:scale-95 disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: ['bg-indigo-500', 'active:bg-indigo-600'],
        outline: [
          'bg-white',
          'border-2',
          'border-indigo-500',
          'active:bg-indigo-100',
          'dark:bg-black',
          'dark:active:bg-neutral-800',
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

const ButtonTextVariants = cva(
  'text-xl font-bold group-disabled/button:opacity-50',
  {
    variants: {
      variant: {
        primary: ['text-white'],
        outline: ['text-indigo-500', 'dark:text-white'],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export const Button = ({
  text,
  className,
  textClassName,
  ...props
}: {
  text: string;
  textClassName?: string;
} & PressableProps &
  VariantProps<typeof ButtonVariants> &
  VariantProps<typeof ButtonTextVariants>) => {
  return (
    <Pressable className={cn(ButtonVariants(props), className)} {...props}>
      <Text className={cn(ButtonTextVariants(props), textClassName)}>
        {text}
      </Text>
    </Pressable>
  );
};
