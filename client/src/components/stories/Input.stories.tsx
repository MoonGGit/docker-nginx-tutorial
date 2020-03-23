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
    const customTheme = radios('[Light]customTheme', { Light: 'light', Dark: 'dark', Green: 'green' }, 'light');
    const placeholder = text('[Light]placeholder', 'light');
    return <Input {...{ customTheme, placeholder }} />;
};

export const Dark = () => {
    const customTheme = radios('[Dark]customTheme', { Light: 'light', Dark: 'dark', Green: 'green' }, 'dark');
    const placeholder = text('[Dark]placeholder', 'dark');
    return <Input {...{ customTheme, placeholder }} />;
};

export const Green = () => {
    const customTheme = radios('[Green]customTheme', { Light: 'light', Dark: 'dark', Green: 'green' }, 'green');
    const placeholder = text('[Green]placeholder', 'green');
    return <Input {...{ customTheme, placeholder }} />;
};
