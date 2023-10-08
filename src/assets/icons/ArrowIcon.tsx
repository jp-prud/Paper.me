import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export function ArrowIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83"
      />
    </Svg>
  );
}
