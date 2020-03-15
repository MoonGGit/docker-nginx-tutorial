import React from 'react';
import { withKnobs, text, boolean, radios, array, number } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import WrapperImpl, { ComponentProps } from '../WrapperImpl';

export default {
    title: '입력래퍼|Wrapper/styled-WrapperImpl',
    component: WrapperImpl,
    decorators: [withKnobs, withActions('click button')],
    parameters: {
        componentSubtitle: 'props설명이 안나옴 ㅠㅠ 아마 구조분해할당 때문인 것 같은.',
    },
};

export const WrapperWithComponent = () => {
    const backgroundBlock = boolean('backgroundBlock', false);
    const isTitleOrSub = boolean('isTitleOrSub', true);
    const title = text('title', '안녕하살법');
    const subscription = text('subscription', '받아치기!');
    const theme = radios('theme', { Light: 'light', Dark: 'dark', Green: 'green' }, 'light');
    const big = boolean('big', false);
    const verticalAlign = boolean('verticalAlign', false);
    const verticalBottom = boolean('verticalBottom', false);
    const verticalWrapperWidth = number('verticalWrapperWidth', 0);
    const verticalWrapperHeight = number('verticalWrapperHeight', 0);
    const verticalLineHeight = number('verticalLineHeight', 0);
    const horizonLineWidth = number('horizonLineWidth', 0);
    const selectComponents = radios('selectComponents', { Input: 'input', Button: 'button' }, 'button');
    const buttonComponents: ComponentProps[] = [
        {
            type: 'BUTTON',
            theme: 'dark',
            btnText: 'cancel',
            big: false,
            onClick: event => {
                event.stopPropagation();
                console.log('cancel-button clicked');
            },
        },
        {
            type: 'BUTTON',
            theme: 'light',
            btnText: 'OK',
            big: false,
            onClick: event => {
                event.stopPropagation();
                console.log('ok-button clicked');
            },
        },
    ];
    const inputComponents: ComponentProps[] = [
        {
            type: 'INPUT',
            theme: 'dark',
            placeholder: 'dark placeholder',
            big: false,
            onChange: event => {
                event.stopPropagation();
                console.log('dark-input changed');
            },
        },
        {
            type: 'INPUT',
            theme: 'light',
            placeholder: 'light placeholder',
            big: false,
            onChange: event => {
                event.stopPropagation();
                console.log('light-input changed');
            },
        },
    ];
    const components = {
        input: inputComponents,
        button: buttonComponents,
    };
    return (
        <WrapperImpl
            {...{
                big,
                theme,
                title,
                verticalAlign,
                subscription,
                verticalLineHeight,
                verticalBottom,
                verticalWrapperHeight,
                verticalWrapperWidth,
                backgroundBlock,
                isTitleOrSub,
                horizonLineWidth,
            }}
            components={components[selectComponents]}
        />
    );
};
