import {Box, Button, Text} from '@components';

interface HomeErrorPostListProps {
  refetch: () => void;
}

export function HomeErrorPostList({refetch}: HomeErrorPostListProps) {
  return (
    <Box flex={1} justifyContent="center" testID="home-error-post-list">
      <Box alignItems="center" gap="s4" mb="s24">
        <Text preset="paragraphLarge" bold>
          Oops! 🙈
        </Text>

        <Text textAlign="center">
          Não foi possível carregar os posts. Por favor, verifique sua conexão e
          tente novamente.
        </Text>
      </Box>

      <Button text="Tentar novamente" onPress={refetch} />
    </Box>
  );
}
