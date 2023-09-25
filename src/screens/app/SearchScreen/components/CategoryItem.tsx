import {CategoryProps} from '@domain';

import {Box, Text} from '@components';

interface CategoryItemProps {
  category: CategoryProps;
}

export function CategoryItem({category}: CategoryItemProps) {
  const {icon, name} = category;

  return (
    <Box
      backgroundColor="neutral100"
      alignItems="center"
      gap="s8"
      p="s16"
      flexGrow={1}
      flex={1}
      borderRadius="s12">
      <Box
        backgroundColor="white"
        p="s12"
        borderRadius="s32"
        justifyContent="center"
        alignItems="center">
        <Text preset="headingMedium">{icon}</Text>
      </Box>

      <Text bold color="neutral900">
        {name}
      </Text>
    </Box>
  );
}
