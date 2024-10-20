import type { ComponentProps } from 'react';
import { Platform } from 'react-native';

import { Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

/**
 * Open external links in an in-app browser on native platforms.
 */
export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Link
      {...rest}
      target='_blank'
      // @ts-expect-error: `href` accepts a string or object, but we only want to support strings.
      href={href}
      onPress={async event => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href);
        }
      }}
    />
  );
}
