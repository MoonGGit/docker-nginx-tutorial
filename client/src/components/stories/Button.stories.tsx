import React from 'react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import Button from '../Button';

export default {
    title: '입력래퍼|Button/styled-Button',
    component: Button,
    decorators: [withKnobs, withActions('click button')],
};

export const Default = () => {
    return <Button />;
};

export const Light = () => {
    const btnText = text('[Light]text', 'light: click me');
    const customTheme = radios('[Light]customTheme', { Light: 'light', Dark: 'dark', Green: 'green' }, 'light');
    const big = boolean('[Light]size', false);
    return <Button {...{ btnText, customTheme, big }}></Button>;
};

export const Dark = () => {
    const btnText = text('[Dark]text', 'dark: click me');
    const customTheme = radios('[Dark]customTheme', { Light: 'light', Dark: 'dark', Green: 'green' }, 'dark');
    const big = boolean('[Dark]size', false);
    return <Button {...{ btnText, customTheme, big }}></Button>;
};

export const Green = () => {
    const btnText = text('[Green]text', 'green: click me');
    const customTheme = radios('[Green]customTheme', { Light: 'light', Dark: 'dark', Green: 'green' }, 'green');
    const big = boolean('[Green]size', false);
    return <Button {...{ btnText, customTheme, big }}></Button>;
};
