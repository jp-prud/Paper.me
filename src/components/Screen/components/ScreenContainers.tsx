import {ScrollView, View} from 'react-native';

interface BaseView {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollableViewContainer({backgroundColor, children}: BaseView) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor, flex: 1}}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({backgroundColor, children}: BaseView) {
  return <View style={{backgroundColor, flex: 1}}>{children}</View>;
}
