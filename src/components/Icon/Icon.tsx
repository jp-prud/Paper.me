import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {
  AddIcon,
  ArrowIcon,
  ArticleIcon,
  BellIcon,
  ClockIcon,
  CheckIcon,
  ChevronIcon,
  CloseIcon,
  HeartIcon,
  HomeIcon,
  FavoriteIcon,
  LogoutIcon,
  ListCheckIcon,
  ListOrderedLineIcon,
  MessageIcon,
  PencilIcon,
  ReloadIcon,
  SearchIcon,
  ShareIcon,
  UserIcon,
  RedoIcon,
  KeyboardIcon,
  UndoIcon,
  TextBoldIcon,
  TextItalicIcon,
  TextLinkIcon,
  TextStrikethroughIcon,
  TextUnderlineIcon,
  LineIcon,
  TextHeadingIcon,
  TextDefaultIcon,
  SuccessIcon,
} from '../../assets/icons';
import {Box} from '../Box/Box';

export interface IconBase {
  size?: number;
  color?: string;
  testID?: string;
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

  const testID = `icon-${name}`;

  if (onPress) {
    return (
      <Pressable testID={testID} hitSlop={10} onPress={onPress}>
        {Icon}
      </Pressable>
    );
  }

  return <Box testID={testID}>{Icon}</Box>;
}

const iconRegistry = {
  add: AddIcon,
  arrow: ArrowIcon,
  article: ArticleIcon,
  bell: BellIcon,
  clock: ClockIcon,
  check: CheckIcon,
  chevron: ChevronIcon,
  close: CloseIcon,
  heart: HeartIcon,
  home: HomeIcon,
  favorite: FavoriteIcon,
  logout: LogoutIcon,
  listCheck: ListCheckIcon,
  listOrder: ListOrderedLineIcon,
  message: MessageIcon,
  pencil: PencilIcon,
  reload: ReloadIcon,
  search: SearchIcon,
  share: ShareIcon,
  user: UserIcon,
  redo: RedoIcon,
  keyboard: KeyboardIcon,
  undo: UndoIcon,
  textBold: TextBoldIcon,
  textItalic: TextItalicIcon,
  textLink: TextLinkIcon,
  textStriketrough: TextStrikethroughIcon,
  textUnderline: TextUnderlineIcon,
  line: LineIcon,
  textHeading: TextHeadingIcon,
  textDefault: TextDefaultIcon,
  success: SuccessIcon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
