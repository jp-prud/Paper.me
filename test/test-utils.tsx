import React, {ReactElement} from 'react';
import {FC} from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {render} from '@testing-library/react-native';

import {theme} from '@theme';

import {TestSafeAreaProvider} from './utils';

type Options = Parameters<typeof render>[1];

const AllTheProviders: FC<{children: React.ReactNode}> = ({children}) => (
  <TestSafeAreaProvider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </TestSafeAreaProvider>
);

const customRender = (ui: ReactElement, options?: Options) =>
  render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';
export * from './utils';

export {customRender as render};
