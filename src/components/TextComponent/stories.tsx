import { Meta, Story } from "@storybook/react/types-6-0";
import { TextComponent, TextComponentProps } from ".";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Cum nam distinctio corporis cupiditate consequatur quasi accusamus dicta at, 
    minus blanditiis nobis omnis vero. Placeat sint qui quidem fugiat aliquam reprehenderit.`,
  },
  argTypes: {
    children: { type: "string" },
  },
} as Meta;

export const Template: Story<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
