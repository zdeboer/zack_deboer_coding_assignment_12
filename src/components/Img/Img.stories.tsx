import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';
import { ImgProps } from './Img.types';

const meta: Meta<ImgProps> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<ImgProps>;

export const Default: Story = {
  args: {
    src: 'https://img.freepik.com/premium-vector/gray-picture-person-with-gray-background_1197690-22.jpg?semt=ais_rp_progressive&w=740&q=80',
    alt: 'Placeholder image',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://img.freepik.com/premium-vector/gray-picture-person-with-gray-background_1197690-22.jpg?semt=ais_rp_progressive&w=740&q=80',
    alt: 'Disabled image',
    disabled: true,
  },
};
