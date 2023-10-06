import {SafeAreaProvider} from 'react-native-safe-area-context';

export function TestSafeAreaProvider({children}: {children: React.ReactNode}) {
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: {x: 0, y: 0, width: 0, height: 0},
        insets: {top: 0, left: 0, right: 0, bottom: 0},
      }}>
      {children}
    </SafeAreaProvider>
  );
}
