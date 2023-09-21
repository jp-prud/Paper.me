import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function TextBoldIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="M13 3a5 5 0 0 1 3.436 8.633 5 5 0 0 1-2.219 9.363L14 21H6.1a1.1 1.1 0 0 1-1.094-.98L5 19.9V4.1a1.1 1.1 0 0 1 .98-1.094L6.1 3H13Zm1 10H7v6h7a3 3 0 1 0 0-6Zm-1-8H7v6h6a3 3 0 1 0 0-6Z"
      />
    </Svg>
  );
}
