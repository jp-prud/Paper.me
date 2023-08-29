import {CategoryProps} from '@domain';

import {Box, Text} from '@components';

interface CategoryItemProps {
  category: CategoryProps;
}

export function CategoryItem({category}: CategoryItemProps) {
  const {icon, name} = category;

  return (
    <Box flexDirection="row" alignItems="center" gap="s8">
      <Box
        width={46}
        height={46}
        borderRadius="s8"
        backgroundColor="gray4"
        justifyContent="center"
        alignItems="center">
        <Text preset="headingMedium">{icon}</Text>
      </Box>

      <Text semiBold>{name}</Text>
    </Box>
  );
}
