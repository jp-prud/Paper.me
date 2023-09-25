import {Box, Text} from '@components';

export function UpgradePlanAlert() {
  return (
    <Box
      backgroundColor="neutral100"
      paddingHorizontal="s12"
      paddingVertical="s16"
      borderRadius="s32"
      alignItems="center"
      mt="s16">
      <Text semiBold>
        <Text color="primary" bold>
          Atualize
        </Text>{' '}
        para ler a matéria completa.
      </Text>
    </Box>
  );
}
