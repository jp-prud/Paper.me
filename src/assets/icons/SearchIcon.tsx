import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function SearchIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="M20.787 20.787a.731.731 0 0 0 0-1.032L15.53 14.5a7.02 7.02 0 0 0 1.578-4.446A7.062 7.062 0 0 0 10.054 3 7.062 7.062 0 0 0 3 10.054a7.062 7.062 0 0 0 7.054 7.054A7.02 7.02 0 0 0 14.5 15.53l5.257 5.257a.729.729 0 0 0 1.03 0Zm-5.138-10.733a5.6 5.6 0 0 1-5.594 5.594 5.6 5.6 0 0 1-5.595-5.594 5.6 5.6 0 0 1 5.594-5.594 5.6 5.6 0 0 1 5.595 5.594Z"
      />
    </Svg>
  );
}
