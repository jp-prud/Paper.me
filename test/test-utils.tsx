import React, {ReactElement} from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {RenderOptions, render} from '@testing-library/react-native';

import {theme} from '@theme';

import {TestSafeAreaProvider} from './utils';

const AllTheProviders = ({children}: {children: React.ReactNode}) => (
  <TestSafeAreaProvider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </TestSafeAreaProvider>
);

function customRender<T = unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, {wrapper: AllTheProviders, ...options});
}

export * from '@testing-library/react-native';
export * from './utils';

export {customRender as render};
