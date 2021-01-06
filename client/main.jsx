import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';

import { Provider } from 'react-redux'
import store from '../imports/store'

const rootElement = document.getElementById('react-target');

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <App/>
    </Provider>
  , rootElement);
});
