import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function UndoIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M3.076 5.617A1 1 0 0 1 4 5h10a7 7 0 1 1 0 14H5a1 1 0 1 1 0-2h9a5 5 0 1 0 0-10H6.414l1.793 1.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1-.217-1.09Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
