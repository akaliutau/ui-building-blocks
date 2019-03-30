import React from 'react';

import { storiesOf } from '@storybook/react';
import { number, select, withKnobs } from '@storybook/addon-knobs';

import {
  TypesOfTypography,
  ThemeColors,
  AligningText,
  WrappingText
} from '../Typography';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add('Types Of Typography', () => <TypesOfTypography />)
  .add('Theme Colors', () => (
    <ThemeColors
      color={select(
        'Color',
        {
          Default: 'default',
          Error: 'error',
          Inherit: 'inherit',
          Primary: 'primary',
          Secondary: 'secondary',
          'Text Primary': 'textPrimary',
          'Text Secondary': 'textSecondary'
        },
        'default'
      )}
    />
  ))
  .add('Aligning Text', () => (
    <AligningText
      horizontalAlign={select(
        'Horizontal Alignment',
        { Left: 'flex-start', Center: 'center', Right: 'flex-end' },
        'flex-start'
      )}
      verticalAlign={select(
        'Vertical Alignment',
        {
          Top: 'flex-start',
          Center: 'center',
          Bottom: 'flex-end'
        },
        'flex-start'
      )}
    />
  ))
  .add('Wrapping Text', () => <WrappingText />);
