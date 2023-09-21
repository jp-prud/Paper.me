import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function ListCheckIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="M4.5 17.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM20 18a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h11ZM4.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM20 11a1 1 0 0 1 .117 1.993L20 13H9a1 1 0 0 1-.117-1.993L9 11h11ZM4.5 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM20 4a1 1 0 0 1 .117 1.993L20 6H9a1 1 0 0 1-.117-1.993L9 4h11Z"
      />
    </Svg>
  );
}
