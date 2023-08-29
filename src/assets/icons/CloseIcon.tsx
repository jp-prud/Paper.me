import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function CloseIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="m16.291 17.352-4-4-4.005 4a.752.752 0 1 1-1.066-1.061l4.005-4-4.005-4.01A.75.75 0 1 1 8.281 7.22l4.005 4.005 4-4.005a.75.75 0 1 1 1.061 1.061l-4 4.005 4 4a.75.75 0 0 1-1.061 1.061l.005.005Z"
      />
    </Svg>
  );
}
