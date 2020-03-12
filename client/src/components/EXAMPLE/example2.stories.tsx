import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { action, withActions } from '@storybook/addon-actions';
import TestComponent from './example2';
import mdx from './example2.mdx';

export default {
    title: '예제2|테스트', // 문서에 경로
    component: TestComponent, // 문서화 대상 컴포넌트(mdx사용 시 불필요)
    decorators: [withKnobs, withActions('click span')], // 애드온
    parameters: {
        componentSubtitle: 'subtitle입니당😆', // 부제목을 설정,
        docs: {
            // inlineStories: false, // 스토리를 보여줄 때 iframe을 사용하게되서, 컴포넌트가 영역밖으로 나가는 것을 방지
            page: mdx, // 설정 시, docs페이지가 대체됨
        },
    },
};

export const DOC = () => <TestComponent />;

export const SPAN1 = () => {
    const name = text('이름', '문지짱');
    const num = number('번호', 817010669083);
    return <TestComponent onClick={action('span1 action')} name={name} pNumber={num} />;
};

SPAN1.story = {
    name: '스팬1',
};
