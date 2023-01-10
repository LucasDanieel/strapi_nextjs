import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: '<p><a href="https://www.youtube.com/">Feito com ❤ por Lucas Daniel</a></p>',
  }
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
);
};
