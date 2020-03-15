import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
    title: '예제|example1',
    //component: Button,
    decorators: [withKnobs],
};

/**************** knobs
    export const마다 컴포넌트가 하나씩 생김 
*/
export const btn = () => {
    const name = text('name', 'Storybook-CustomName');
    return <Button>{`${name}`}</Button>;
};
btn.story = {
    // 지정 않할 시 함수명 'btn'이 표시됨
    name: 'DOC',
};

/**************** action
  액션 다른거 어떻게 넣음
*/
export const TextActions = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const EmojiActions = () => (
    <Button onClick={action('eventName')}>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Button>
);
