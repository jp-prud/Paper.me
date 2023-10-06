import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {ScreenProps} from '../Screen';

const ICON_SIZE = 22;

export function ScreenHeader({
  title,
  canGoBack,
}: Pick<ScreenProps, 'title' | 'canGoBack'>) {
  const {goBack} = useNavigation();

  function renderBackButton() {
    return (
      <TouchableOpacityBox
        gap="s8"
        flexDirection="row"
        alignItems="center"
        onPress={goBack}>
        <Box>
          <Icon name="chevron" color="primary" />
        </Box>

        {!title && <Text bold>Voltar</Text>}
      </TouchableOpacityBox>
    );
  }

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent={title ? 'space-between' : 'flex-start'}
      mb="s24"
      testID="screen-header-component">
      {canGoBack && renderBackButton()}

      {title && (
        <Box flex={1}>
          <Text preset="headingSmall" textAlign="center">
            {title}
          </Text>
        </Box>
      )}

      {title && canGoBack && <Box width={ICON_SIZE} />}
    </Box>
  );
}
