import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/storybook.js');
}

configure(loadStories, module);
