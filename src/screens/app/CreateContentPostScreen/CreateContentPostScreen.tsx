import {ViewStyle} from 'react-native';

import {RichEditor} from 'react-native-pell-rich-editor';

import {Button, Screen, Text, Box} from '@components';
import {AppScreenProps} from '@routes';

import {RichTextEditor} from './components';
import {useCreateContentPostScreen} from './useCreateContentPostScreen';

export function CreateContentPostScreen({
  route,
}: AppScreenProps<'CreateContentPostScreen'>) {
  const {RichTextReference, handleChangeArticleContent, handlePressCreatePost} =
    useCreateContentPostScreen(route.params);

  return (
    <Screen
      canGoBack
      title="Conteúdo do Post"
      FooterComponent={<RichTextEditor ref={RichTextReference} />}
      footerContainerStyle={$footerContainerEditorStyle}>
      <Text mb="s16">Digite o conteúdo para o seu Post.</Text>

      <Box flex={1} mb="s20">
        <RichEditor
          containerStyle={$richEditorStyle}
          style={$richEditorStyle}
          disabled={false}
          ref={RichTextReference}
          placeholder="Conteúdo do post"
          onChange={handleChangeArticleContent}
        />
      </Box>

      <Button text="Publicar" onPress={handlePressCreatePost} />
    </Screen>
  );
}

const $richEditorStyle: ViewStyle = {
  flex: 1,
};

const $footerContainerEditorStyle: ViewStyle = {
  paddingBottom: 0,
};
