import { Meta, Story } from '@storybook/react/types-6-0';
import { GridContente, GridContenteProps } from '.';
import mock from './mock'

export default {
  title: 'GridContente',
  component: GridContente,
  args: mock,
} as Meta;

export const Template: Story<GridContenteProps> = (args) => {
  return (
    <div>
      <GridContente {...args} />
    </div>
  );
};
