import {Svg, Path, G} from 'react-native-svg';

import {IconBase} from '@components';

export function TextDefaultIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size}>
      <G fill="none" fillRule="nonzero">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M5 4a1 1 0 0 0 0 2h6v14a1 1 0 1 0 2 0V6h6a1 1 0 1 0 0-2H5Z"
        />
      </G>
    </Svg>
  );
}
