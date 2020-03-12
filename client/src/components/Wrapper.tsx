import React from 'react';
import styled from 'styled-components';

/**
 * 바깥
 */
const DefaultWrapper = styled.div`
    width: 265px;
    height: 110px;
    padding: 2.5%;
    padding-bottom: 1%;
    border-radius: 5px;
    ${(props: any) => props.css};
`;

/**
 * 안(내용 + 자식(버튼))
 */
const WrapperInner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    h3 {
        margin-top: 0px;
        margin-bottom: 10px;
    }
    span {
        margin-left: 5px;
        font-size: 15px;
    }
    div {
        position: absolute;
        bottom: 0px;
        right: 0px;
    }
`;

const WrapperThemes = {
    light: styled(DefaultWrapper)`
        border: 2px solid black;
        background: white;
        color: black;
    `,
    dark: styled(DefaultWrapper)`
        border: 2px solid #5c5d5c;
        background: #353b48;
        color: white;
    `,
    green: styled(DefaultWrapper)`
        border: 2px solid #9ee4c2;
        background: #9bd87c;
        color: white;
        ${WrapperInner} h3 {
            color: black;
            font-weight: bold;
        }
    `,
};

export interface Props {
    /** [공통]테마 */
    theme: 'light' | 'dark' | 'green';
    /** [공통]크기 - 미구현 */
    big: boolean;
    /** 제목 */
    title?: string;
    /** 내용 */
    subscription?: string;
    /** 세로정렬 - 미구현 */
    verticalAlign: boolean;
    /** 자식노드 */
    children?: React.ReactNode;
}

/**
 *  1. 내용 + 버튼 : 가로 정렬
 *  2. 입력 컴포넌트 : 세로 정렬
 *
 *  ***크기***, ***세로정렬*** 미구현
 */
const Wrapper = ({ theme, title, subscription, children, ...props }: Props) => {
    const BtnWrapper = WrapperThemes[theme];
    return (
        <BtnWrapper {...props}>
            <WrapperInner {...props}>
                {title ? <h3>{title}</h3> : false}
                {subscription ? <span>{subscription}</span> : false}
                <div>{children}</div>
            </WrapperInner>
        </BtnWrapper>
    );
};

Wrapper.defaultProps = {
    theme: 'light',
    big: false,
    verticalAlign: false,
};

export default Wrapper;
