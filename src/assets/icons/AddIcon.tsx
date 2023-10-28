import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export function AddIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 12h12M12 18V6"
      />
    </Svg>
  );
}
