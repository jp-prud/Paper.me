import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function CheckIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="M7.214 11.864a.857.857 0 1 0-1.29 1.129l3 3.429a.857.857 0 0 0 1.27.024l7.286-7.714a.857.857 0 0 0-1.246-1.177l-6.639 7.031-2.381-2.722Z"
      />
    </Svg>
  );
}
