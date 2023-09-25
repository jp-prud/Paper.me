import {Box, BoxProps, LinkStandAlone, Text} from '@components';

export interface TitleBarProps {
  title: string;
  linkText?: string;
  hasIcon?: boolean;
}

export function TitleBar({
  title,
  linkText,
  hasIcon = false,
  ...boxProps
}: TitleBarProps & BoxProps) {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      {...boxProps}>
      <Text preset="paragraphLarge" bold>
        {title}
      </Text>

      {linkText && <LinkStandAlone text={linkText} hasIcon={hasIcon} />}
    </Box>
  );
}
