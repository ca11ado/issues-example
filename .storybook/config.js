import { configure, addParameters, addDecorator } from '@storybook/vue';
import { withInfo, setDefaults } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

setDefaults({
  header: false,
});
addDecorator(withInfo);
addDecorator(withKnobs);

function loadStories() {
  const req = require.context('../stories', true, /\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
