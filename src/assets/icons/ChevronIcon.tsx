import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function ChevronIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="M15.28 7.28a.75.75 0 1 0-1.06-1.06l-5 5a.751.751 0 0 0 0 1.061l5 5a.75.75 0 0 0 1.06-1.061l-4.469-4.47 4.469-4.47Z"
      />
    </Svg>
  );
}
