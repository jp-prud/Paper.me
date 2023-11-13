import {useNavigation} from '@react-navigation/native';

import {Box, Button, Text} from '@components';

export function HomeEmptyPostList() {
  const {navigate} = useNavigation();

  function handleCreatePost() {
    navigate('PreviewPostScreen');
  }

  return (
    <Box testID="home-empty-post-list" flex={1} justifyContent="center">
      <Box alignItems="center" gap="s4" mb="s24">
        <Text textAlign="center" preset="paragraphLarge" bold>
          Oops! 🙈
        </Text>

        <Text textAlign="center">
          Nenhum post encontrado. Seja o primeiro a criar um post.
        </Text>
      </Box>

      <Button text="Criar post" onPress={handleCreatePost} />
    </Box>
  );
}
