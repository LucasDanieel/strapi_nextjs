import { GridContente } from '.';
import mock from './mock'

export default {
  title: 'GridContente',
  component: GridContente,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <GridContente {...args} />
    </div>
);
};
