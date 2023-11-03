import {render} from '@tests';

import {Screen, ScreenProps} from '@components';

export function renderCustomScreenComponent({
  children,
  ...screenProps
}: ScreenProps) {
  return render(<Screen {...screenProps}>{children}</Screen>);
}
