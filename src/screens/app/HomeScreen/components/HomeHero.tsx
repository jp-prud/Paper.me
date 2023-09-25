import {Pressable, Image} from 'react-native';

import {Box, Icon, Text} from '@components';

export function HomeHero() {
  return (
    <Pressable>
      <Box flexDirection="column" gap="s16">
        <Box height={180} overflow="hidden" borderRadius="s16" flex={1}>
          <Image
            source={require('../../../../assets/images/bannerHome.png')}
            resizeMode="stretch"
            resizeMethod="scale"
          />
        </Box>

        <Box gap="s14">
          <Text preset="headingSmall">
            Saiba quais são as vantagens de criar uma rotina organizada
          </Text>

          <Box flexDirection="row" alignItems="center">
            <Text color="neutral500" semiBold>
              Lifestyle
            </Text>

            <Box
              flex={1}
              justifyContent="flex-end"
              flexDirection="row"
              gap="s20">
              <Box flexDirection="row" alignItems="center" gap="s8">
                <Icon name="search" color="neutral500" size={24} />
                <Text color="neutral500" semiBold>
                  1h ago
                </Text>
              </Box>

              <Box flexDirection="row" alignItems="center" gap="s8">
                <Icon name="message" color="neutral500" />
                <Text color="neutral500" semiBold>
                  1
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
}
