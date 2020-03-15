import React from 'react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import Input from '../Input';

export default {
    title: '입력래퍼|Input/styled-Input',
    component: Input,
    decorators: [withKnobs, withActions('click input', 'change input')],
};

export const Default = () => {
    return <Input />;
};

export const Light = () => {
    const theme = radios('[Light]theme', { Light: 'light', Dark: 'dark', Green: 'green' }, 'light');
    const placeholder = text('[Light]placeholder', 'light');
    return <Input {...{ theme, placeholder }} />;
};

export const Dark = () => {
    const theme = radios('[Dark]theme', { Light: 'light', Dark: 'dark', Green: 'green' }, 'dark');
    const placeholder = text('[Dark]placeholder', 'dark');
    return <Input {...{ theme, placeholder }} />;
};

export const Green = () => {
    const theme = radios('[Green]theme', { Light: 'light', Dark: 'dark', Green: 'green' }, 'green');
    const placeholder = text('[Green]placeholder', 'green');
    return <Input {...{ theme, placeholder }} />;
};
