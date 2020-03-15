import React from 'react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import App from './App';

export default {
    title: 'App',
    component: App,
    decorators: [withKnobs, withActions('click button')],
};

export const Default = () => {
    return <App />;
};
