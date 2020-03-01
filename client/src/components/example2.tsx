import React from 'react';

/* type Props = ...로 해도 됨*/
interface Props {
    /**
     * 여기서 적으면 됨1
     */
    name?: string;
    /**
     * 여기서 적으면 됨22
     */
    pNumber?: number;
}

/**
 * - `여기`는 **컴포넌트** 설명.
 * - 컴포넌트를 export로 안하면 이 곳 설명, 프롭설명 안뜸.
 * - @param props : 프롭 설명.
 */
export const TestComponent = ({ name, pNumber }: Props) => {
    return <span>{`${name}: ${pNumber}`}</span>;
};

TestComponent.defaultProps = {
    name: '디폴트문지짱짱맨',
    pNumber: 123123,
};

export default TestComponent;
