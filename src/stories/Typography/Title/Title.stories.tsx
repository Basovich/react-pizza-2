import type { Meta, StoryObj } from '@storybook/react';
import { Title } from '.';
import { GlobalStyle } from '../../../globalStyle/globalStyle';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Typography/Title',
  component: Title,
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
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span'],
      description: 'Choose a title tag'
    },
    size: { 
      control: 'select', 
      options: ['title-h1', 'title-h2', 'title-h3', 'title-h4'],
      description: 'Choose a size title'
    },
    weight: { 
      control: 'select', 
      options: ['300', '400', '500', '600', '700', '800', '900'],
      description: 'Choose a weight title'
    }
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Titles: Story = {
  args: {
    children: 'All pizzas',
    color: '#222',
    textAlign: 'left',
    as: 'h1',
    size: 'title-h1',
    weight: '700'
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