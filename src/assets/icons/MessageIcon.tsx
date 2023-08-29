import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function MessageIcon({color = 'black', size = 24}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        fill={color}
        d="M4.51 18.943a1.546 1.546 0 0 1-1.044-.413A1.474 1.474 0 0 1 3 17.44V7.25A2.253 2.253 0 0 1 5.25 5h13.5A2.253 2.253 0 0 1 21 7.25v7.5A2.253 2.253 0 0 1 18.75 17H7.061l-1.5 1.5a1.48 1.48 0 0 1-1.051.443ZM5.25 6.5a.751.751 0 0 0-.75.75v10.19l1.719-1.72a.753.753 0 0 1 .531-.22h12a.751.751 0 0 0 .75-.751V7.25a.751.751 0 0 0-.75-.75H5.25ZM15 13.25H9a.75.75 0 1 1 0-1.5h6a.75.75 0 1 1 0 1.5Zm-3.749-3H9a.75.75 0 1 1 0-1.5h2.25a.75.75 0 1 1 0 1.5h.001Z"
      />
    </Svg>
  );
}
