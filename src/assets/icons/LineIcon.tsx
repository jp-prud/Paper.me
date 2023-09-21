import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function LineIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size + 1} height={size} viewBox="0 0 25 24" fill="none">
      <Path
        d="M12 5L12 19"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
