import { Meta, Story } from "@storybook/react/types-6-0";
import { SectionBackground, SectionBackgroundProps } from ".";

export default {
  title: "SectionBackground",
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint modi nisi libero ducimus,
          quas quod, adipisci consequatur placeat impedit soluta aspernatur provident laboriosam illo optio.
          Illo, fuga perspiciatis! Omnis!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: "" },
  },
} as unknown as Meta;

export const Template: Story<SectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
