import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function ShareIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="M16.91 20a3.093 3.093 0 0 1-3.023-3.739l-5.464-2.732a3.091 3.091 0 1 1 0-4.058l5.464-2.732a3.093 3.093 0 1 1 .691 1.382l-5.464 2.732a3.1 3.1 0 0 1 0 1.3l5.464 2.732A3.09 3.09 0 1 1 16.91 20Zm0-4.637a1.546 1.546 0 1 0 1.43.954 1.54 1.54 0 0 0-1.43-.954ZM6.091 9.954a1.547 1.547 0 1 0 0 3.093 1.547 1.547 0 0 0 0-3.093ZM16.91 4.545a1.548 1.548 0 0 0-1.094 2.639 1.545 1.545 0 1 0 1.094-2.639Z"
      />
    </Svg>
  );
}
