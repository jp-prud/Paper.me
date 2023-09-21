import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function TextItalicIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="M9 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-2.117l-1.75 14H14a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h2.117l1.75-14H10a1 1 0 0 1-1-1Z"
      />
    </Svg>
  );
}
