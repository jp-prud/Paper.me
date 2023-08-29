import React, {ReactElement} from 'react';
import {FC} from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {render} from '@testing-library/react-native';

import {theme} from '@theme';

type Options = Parameters<typeof render>[1];

const AllTheProviders: FC<{children: React.ReactNode}> = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: ReactElement, options?: Options) =>
  render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';
export {customRender as render};
