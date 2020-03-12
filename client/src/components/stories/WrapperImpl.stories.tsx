import React from 'react';
import { withKnobs, text, boolean, radios, array } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import WrapperImpl from '../WrapperImpl';

export default {
    title: '버튼|WrapperImpl/styled-WrapperImpl',
    component: WrapperImpl,
    decorators: [withKnobs, withActions('click button')],
};

export const Default = () => {
    return <WrapperImpl />;
};

export const Light = () => {
    const title = text('[Light]title', '안녕하살법');
    const subscription = text('[Light]subscription', '받아치기!');
    const theme = radios('[Light]theme', { Light: 'light', Dark: 'dark', Green: 'green' }, 'light');
    const big = boolean('[Light]big', false);
    const verticalAlign = boolean('[Light]verticalAlign', false);
    const btn = boolean('[Light]btn', true);
    const btnTextArr = array('[Light]btnTextArr', ['cancel', 'ok'], ',');
    const btnText = text('[Light]btnText', 'Light');
    return <WrapperImpl {...{ big, theme, title, verticalAlign, btnText, subscription, btn, btnTextArr }} />;
};

export const Dark = () => {
    const title = text('[Dark]title', '안녕하살법');
    const subscription = text('[Dark]subscription', '받아치기!');
    const theme = radios('[Dark]theme', { Light: 'light', Dark: 'dark', Green: 'green' }, 'dark');
    const big = boolean('[Dark]big', false);
    const verticalAlign = boolean('[Dark]verticalAlign', false);
    const btn = boolean('[Dark]btn', true);
    const btnTextArr = array('[Dark]btnTextArr', []);
    const btnText = text('[Dark]btnText', 'Dark');
    return <WrapperImpl {...{ big, theme, title, verticalAlign, btnText, subscription, btn, btnTextArr }} />;
};

export const Green = () => {
    const title = text('[Green]title', '안녕하살법');
    const subscription = text('[Green]subscription', '받아치기!');
    const theme = radios('[Green]theme', { Light: 'light', Dark: 'dark', Green: 'green' }, 'green');
    const big = boolean('[Green]big', false);
    const verticalAlign = boolean('[Green]verticalAlign', false);
    const btn = boolean('[Green]btn', true);
    const btnTextArr = array('[Green]btnTextArr', []);
    const btnText = text('[Green]btnText', 'Green');
    return <WrapperImpl {...{ big, theme, title, verticalAlign, btnText, subscription, btn, btnTextArr }} />;
};
