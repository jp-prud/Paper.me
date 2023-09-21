import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function TextLinkIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="M13.768 10.231a5 5 0 0 0-6.89-.172l-.181.172-2.829 2.829a5 5 0 0 0 6.89 7.243l.182-.172 2.12-2.122a1 1 0 0 0-1.32-1.497l-.093.083-2.122 2.122a3 3 0 0 1-4.377-4.1l.135-.143 2.828-2.829a3 3 0 0 1 4.243 0 1 1 0 0 0 1.414-1.414Zm6.364-6.364a5 5 0 0 0-6.89-.172l-.181.172L10.94 5.99a1 1 0 0 0 1.32 1.497l.094-.083 2.121-2.121a3 3 0 0 1 4.378 4.098l-.135.144-2.829 2.829a3 3 0 0 1-4.242 0 1 1 0 1 0-1.415 1.414 5 5 0 0 0 6.89.172l.181-.172 2.829-2.829a5 5 0 0 0 0-7.07Z"
      />
    </Svg>
  );
}
