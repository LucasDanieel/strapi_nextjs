import { Meta, Story } from "@storybook/react/types-6-0";
import { SectionContainer, SectionContainerProps } from ".";

export default {
  title: "SectionContainer",
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
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

export const Template: Story<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
