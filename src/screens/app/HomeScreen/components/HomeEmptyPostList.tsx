import {useNavigation} from '@react-navigation/native';

import {Box, Button, Text} from '@components';

export function HomeEmptyPostList() {
  const {navigate} = useNavigation();

  function handleCreatePost() {
    navigate('PreviewPostScreen');
  }

  return (
    <Box testID="home-empty-post-list">
      <Text textAlign="center">Nenhum post encontrado.</Text>
      <Box>
        <Text textAlign="center">Seja o primeiro a criar um post.</Text>
        <Button text="Criar post" onPress={handleCreatePost} />
      </Box>
    </Box>
  );
}
