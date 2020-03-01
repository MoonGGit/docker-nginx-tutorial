import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import TestComponent from './example2';
import mdx from './example2mdx.mdx';

export default {
    title: '예제2|테스트', // 문서에 경로
    component: TestComponent, // 문서화 대상 컴포넌트(mdx사용 시 불필요)
    decorators: [withKnobs], // 애드온
    parameters: {
        componentSubtitle: 'subtitle입니당😆', // 부제목을 설정,
        docs: {
            page: mdx,
        },
    },
};

export const DOC = () => <TestComponent />;

export const SPAN1 = () => {
    const name = text('이름', '문지짱');
    const num = number('번호', '07010669083');
    return <TestComponent name={name} pNumber={num} />;
};

SPAN1.story = {
    name: '스팬1',
};

export const SPAN2 = () => <TestComponent />;

SPAN2.story = {
    name: '스팬2-디폴트',
};
