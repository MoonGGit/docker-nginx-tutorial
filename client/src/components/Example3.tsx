import React from 'react';

type Props = {
    /**
     * 애니
     */
    animation: 'マママ' | 'steins gate' | '俺いる';
};

const script = {
    マママ: '僕と契約して',
    'steins gate': '狂気のマッドサイエンティスト「鳳凰院 凶真」だ',
    俺いる: 'なんですかそれ口説いてるんですかごめんなさい狙いすぎだし気持ち悪くて無理です',
};

/**
 * - 컴포넌트입니당 77ㅑ
 */
export const Com = ({ animation }: Props) => {
    return (
        <>
            <div
                style={{
                    border: '1px solid black',
                    backgroundColor: '#c6acde',
                    textAlign: 'center',
                }}
            >
                <h3>{animation}</h3>
                <span>{script[animation]}</span>
            </div>
        </>
    );
};

Com.defaultProps = { animation: 'マママ' };

export default Com;
