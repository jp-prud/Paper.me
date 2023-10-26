import React from 'react';

import {render} from '@tests';

import {Button} from '../Button';

describe('<Button />', () => {
  // eslint-disable-next-line jest/expect-expect
  it('should the component rendered', () => {
    render(<Button text="Bem vindo" />);
  });
});
