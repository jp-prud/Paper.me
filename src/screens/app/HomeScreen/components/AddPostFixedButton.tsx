import {ViewStyle} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Icon, TouchableOpacityBox, TouchableOpacityBoxProps} from '@components';
import {$shadowProps} from '@theme';

export function AddPostFixedButton() {
  const {navigate} = useNavigation();

  function handlePressNavigate() {
    navigate('PreviewPostScreen');
  }

  return (
    <TouchableOpacityBox
      testID="add-post-fixed-button"
      onPress={handlePressNavigate}
      {...$touchableContainerStyles}
      style={[$shadowProps, $fixedContainerStyle]}>
      <Icon name="pencil" color="white" />
    </TouchableOpacityBox>
  );
}

const $touchableContainerStyles: TouchableOpacityBoxProps = {
  backgroundColor: 'primary',
  alignItems: 'center',
  justifyContent: 'center',
  width: 56,
  height: 56,
  borderRadius: 's32',
  borderWidth: 2,
  borderColor: 'teal200',
};

const $fixedContainerStyle: ViewStyle = {
  position: 'absolute',
  right: 24,
  bottom: 24,
};
