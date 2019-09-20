import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';
import CustomInput from '../input.vue';

storiesOf('Controls', module)
  .add('CustomInput', () => ({
    components: {
      CustomInput,
    },
    props: {
      placeholder: { default: text('placeholder', '') },
    },
    template: `
      <div>
        <custom-input :placeholder="placeholder" />
      </div>`,
  }), {
    info: {
      summary: `
        Поле ввода для телефона.\n
      `,
    },
  });

