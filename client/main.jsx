import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';

import { Provider } from 'react-redux'
import store from '../imports/store'
import {RenderRoutes} from '../imports/startup/client/routes.js'

const rootElement = document.getElementById('react-target');

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <RenderRoutes/>
    </Provider>
  , rootElement);
});
