import {AuthProvider, ToastProvider} from '@context';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {Router} from '@routes';
import {theme} from '@theme';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <ToastProvider>
            <Router />

            <Toast />
          </ToastProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
