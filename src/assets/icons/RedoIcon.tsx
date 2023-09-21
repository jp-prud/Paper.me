import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function RedoIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M20.924 5.617A1 1 0 0 0 20 5H10a7 7 0 0 0 0 14h9a1 1 0 1 0 0-2h-9a5 5 0 0 1 0-10h7.586l-1.793 1.793a1 1 0 1 0 1.414 1.414l3.5-3.5a1 1 0 0 0 .217-1.09Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
