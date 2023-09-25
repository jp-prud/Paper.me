import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityBoxProps} from '../Box/Box';

import {ButtonPreset} from './Button';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'neutral200',
      },
      content: 'neutral400',
    },
  },
  secondary: {
    default: {
      container: {
        backgroundColor: 'neutral800',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'neutral200',
      },
      content: 'neutral400',
    },
  },
  positive: {
    default: {
      container: {
        backgroundColor: 'green600',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'neutral200',
      },
      content: 'neutral400',
    },
  },
  negative: {
    default: {
      container: {
        backgroundColor: 'red600',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'neutral200',
      },
      content: 'neutral400',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 2,
        borderColor: 'primary',
      },
      content: 'primary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: 'gray4',
    },
  },
};
