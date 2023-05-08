import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './';
import { GlobalStyle } from '../../../globalStyle/globalStyle';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    children: { 
      control: 'text',
      description: 'Could also be React.ReactNode'
    },
    color: { 
      control: 'color',
      description: 'Choose a text color'
     },
    textAlign: { 
      control: 'select', 
      options: ['left', 'center', 'right'],
      description: 'Choose a text align'
    },
    as: { 
      control: 'select', 
      options: ['p', 'div', 'span'],
      description: 'Choose a title tag'
    },
    size: { 
      control: 'select', 
      options: ['large', 'medium', 'small'],
      description: 'Choose a size title'
    },
    weight: { 
      control: 'select', 
      options: ['300', '400', '500', '600', '700', '800', '900'],
      description: 'Choose a weight title'
    }
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Textes: Story = {
  args: {
    children: 'More on writing stories with args',
    color: '#222',
    textAlign: 'left',
    as: 'p',
    size: 'medium',
    weight: '400'
  },
  decorators: [(Story) => {
    return (
    <>
      <GlobalStyle />
      <Story />
    </>
    )
  }]
};