import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function TextUnderlineIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="M18 19a1 1 0 0 1 .117 1.993L18 21H6a1 1 0 0 1-.117-1.993L6 19h12ZM17 3a1 1 0 0 1 .993.883L18 4v8a6 6 0 0 1-11.996.225L6 12V4a1 1 0 0 1 1.993-.117L8 4v8a4 4 0 0 0 7.995.2L16 12V4a1 1 0 0 1 1-1Z"
      />
    </Svg>
  );
}
