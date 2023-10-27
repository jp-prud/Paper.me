import React, {ReactElement} from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RenderOptions, render} from '@testing-library/react-native';

import {theme} from '@theme';

import {TestSafeAreaProvider} from './utils';

export const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TestSafeAreaProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </TestSafeAreaProvider>
    </QueryClientProvider>
  );
};

function customRender<T = unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, {wrapper: AllTheProviders, ...options});
}

export * from '@testing-library/react-native';
export * from './utils';

export {customRender as render};
