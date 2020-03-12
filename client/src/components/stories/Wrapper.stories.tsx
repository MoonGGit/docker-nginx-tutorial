import React from 'react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import Wrapper from '../Wrapper';

export default {
    title: '버튼|Wrapper/styled-Wrapper',
    component: Wrapper,
    decorators: [withKnobs],
};

export const Default = () => {
    return <Wrapper />;
};

export const Light = () => {
    const title = text('[Light]title', '안녕하살법');
    const subscription = text('[Light]subscribe', '받아치기!');
    const theme = radios('[Light]theme', { Light: 'light', Dark: 'dark', Green: 'green' }, 'light');
    const big = boolean('[Light]big', false);
    const verticalAlign = boolean('[Light]verticalAlign', false);
    return <Wrapper {...{ title, subscription, theme, big, verticalAlign }}>children text</Wrapper>;
};

export const Dark = () => {
    const title = text('[Dark]title', '안녕하살법');
    const subscription = text('[Dark]subscribe', '받아치기!');
    const theme = radios('[Dark]theme', { Light: 'light', Dark: 'dark', Green: 'green' }, 'dark');
    const big = boolean('[Dark]big', false);
    const verticalAlign = boolean('[Dark]verticalAlign', false);
    return <Wrapper {...{ title, subscription, theme, big, verticalAlign }}>children text</Wrapper>;
};

export const Green = () => {
    const title = text('[Green]title', '안녕하살법');
    const subscription = text('[Green]subscribe', '받아치기!');
    const theme = radios('[Green]theme', { Light: 'light', Dark: 'dark', Green: 'green' }, 'green');
    const big = boolean('[Green]big', false);
    const verticalAlign = boolean('[Green]verticalAlign', false);
    return <Wrapper {...{ title, subscription, theme, big, verticalAlign }}>children text</Wrapper>;
};
