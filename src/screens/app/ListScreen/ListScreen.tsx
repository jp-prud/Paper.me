import {Box, Icon, Screen, Tabs, Text} from '@components';
import {AppScreenProps} from '@routes';

export function ListScreen({}: AppScreenProps<'ListScreen'>) {
  return (
    <Screen canGoBack title="Suas listas">
      <Tabs list={['Salvas', 'Recentes', 'Destaques']} />

      <Box mt="s24">
        <Box gap="s16" backgroundColor="white" p="s16" borderRadius="s16">
          <Box gap="s12">
            <Box flexDirection="row" gap="s8">
              <Icon name="share" />
              <Text bold>Produtividade</Text>
            </Box>
            <Text>
              Purus viverra aliquet facilisi purus. AC vitae accumsan, vulputate
              et in faucibus orci consectetur
            </Text>
          </Box>

          <Box flexDirection="row" gap="s8">
            <Box
              backgroundColor="amber100"
              height={148}
              flex={1}
              borderRadius="s8"
            />

            <Box gap="s8" flex={1}>
              <Box flex={1} backgroundColor="amber1000" borderRadius="s8" />
              <Box flex={1} backgroundColor="amber1000" borderRadius="s8" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Screen>
  );
}
