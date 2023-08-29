import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {ArticleIcon} from '../../assets/icons/ArticleIcon';
import {BellIcon} from '../../assets/icons/BellIcon';
import {CheckIcon} from '../../assets/icons/CheckIcon';
import {ChevronIcon} from '../../assets/icons/ChevronIcon';
import {CloseIcon} from '../../assets/icons/CloseIcon';
import {HeartIcon} from '../../assets/icons/HeartIcon';
import {LogoutIcon} from '../../assets/icons/LogoutIcon';
import {MessageIcon} from '../../assets/icons/MessageIcon';
import {ReloadIcon} from '../../assets/icons/ReloadIcon';
import {SearchIcon} from '../../assets/icons/SearchIcon';
import {ShareIcon} from '../../assets/icons/ShareIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?(): void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  const Icon = <SVGIcon color={colors[color]} size={size} />;

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        {Icon}
      </Pressable>
    );
  }

  return Icon;
}

const iconRegistry = {
  article: ArticleIcon,
  bell: BellIcon,
  check: CheckIcon,
  chevron: ChevronIcon,
  close: CloseIcon,
  heart: HeartIcon,
  logout: LogoutIcon,
  message: MessageIcon,
  reload: ReloadIcon,
  search: SearchIcon,
  share: ShareIcon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
