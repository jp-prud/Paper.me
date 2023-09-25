import {forwardRef, ForwardedRef} from 'react';
import {ViewStyle} from 'react-native';

import {actions, RichToolbar} from 'react-native-pell-rich-editor';

import {Icon, IconName} from '@components';
import {$shadowProps} from '@theme';

interface RenderToobarIconProps {
  tintColor: string;
  name: IconName;
}

export const RichTextEditor = forwardRef((_, ref: ForwardedRef<unknown>) => {
  const {
    keyboard,
    undo,
    redo,
    setBold,
    setItalic,
    heading1: heading3,
    setStrikethrough,
    insertBulletsList,
    insertOrderedList,
  } = actions;

  function renderToobarIcon({tintColor, name}: RenderToobarIconProps) {
    const mappedColor = tintColor === '#000000b3' ? 'black700' : 'teal600';

    return <Icon name={name} color={mappedColor} />;
  }

  const createIcon =
    (name: IconName) =>
    ({tintColor}: RenderToobarIconProps['tintColor']) =>
      renderToobarIcon({tintColor, name});

  const iconMap = {
    [keyboard]: createIcon('keyboard'),
    [undo]: createIcon('undo'),
    [redo]: createIcon('redo'),
    [heading3]: createIcon('textHeading'),
    [setBold]: createIcon('textBold'),
    [setItalic]: createIcon('textItalic'),
    [setStrikethrough]: createIcon('textStriketrough'),
    [insertBulletsList]: createIcon('listCheck'),
    [insertOrderedList]: createIcon('listOrder'),
  };

  return (
    <RichToolbar
      editor={ref}
      iconTint="#000000b3"
      selectedIconTint="#017582"
      iconSize={40}
      actions={[
        keyboard,
        undo,
        redo,
        heading3,
        setBold,
        setItalic,
        insertBulletsList,
        insertOrderedList,
        setStrikethrough,
      ]}
      iconMap={iconMap}
      style={[$richToolbarStyles, $shadowProps]}
    />
  );
});

const $richToolbarStyles: ViewStyle = {
  backgroundColor: 'white',
  height: 62,
};
