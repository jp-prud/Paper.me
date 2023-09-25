import React from 'react';

import {Box, Button, FormTextInput, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

import {usePreviewPostScreen} from './usePreviewPostScreen';

export function PreviewPostScreen({}: AppScreenProps<'PreviewPostScreen'>) {
  const {control, handlePressNextStep} = usePreviewPostScreen();

  return (
    <Screen
      scrollable
      canGoBack
      title="Novo Post"
      footerContainerStyle={{paddingHorizontal: 24}}
      FooterComponent={<Button text="Avançar" onPress={handlePressNextStep} />}>
      <Box gap="s8" mb="s20">
        <Text>
          Coloque as informações mais importantes aqui para que os leitores
          possam ver rapidamente do que se trata o seu Post.
        </Text>

        <Text>
          Clique em{' '}
          <Text color="primary" semiBold>
            avançar
          </Text>{' '}
          para escrever seu conteúdo.
        </Text>
      </Box>

      <Box gap="s14">
        <FormTextInput control={control} name="title" label="Título" />
        <FormTextInput control={control} name="subtitle" label="Subtítulo" />
        <FormTextInput control={control} name="thumbnail" label="Thumbnail" />
        <FormTextInput
          control={control}
          name="description"
          label="Descrição"
          numberOfLines={6}
          multiline
          textAlignVertical="top"
        />
      </Box>
    </Screen>
  );
}
