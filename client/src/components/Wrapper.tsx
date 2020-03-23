import React from 'react';
import styled, { css } from 'styled-components';

/**
 * 안div(내용 + 자식)
 */
const WrapperInner = styled('div')`
    width: 100%;
    height: 100%;
    ${(props: Props) =>
        props.verticalAlign
            ? `
            display: flex;
            align-items: ${props.verticalBottom ? 'flex-end' : 'center'};
            `
            : `
    `}
    h3 {
        margin-top: 0px;
        margin-bottom: 13px;
        ${(props: Props) => (props.verticalAlign || !props.isTitleOrSub ? 'display:none;' : '')}
    }
    span {
        margin-left: 10px;
        font-size: 15px;
        ${(props: Props) => (props.verticalAlign || !props.isTitleOrSub ? 'display:none;' : '')}
    }
    div {
        width: 100%;
        ${(props: Props) =>
            props.verticalAlign || !props.isTitleOrSub
                ? `
                & > * {
                    display: ${props.verticalAlign ? 'block' : 'inline-block'};
                    width: ${props.verticalAlign ? '100%' : ''};
                    margin: 0px;
                    &:not(:first-of-type), & + * {
                        margin-top: ${
                            props.verticalAlign && props.verticalLineHeight && props.verticalLineHeight !== 0
                                ? props.verticalLineHeight + 'px'
                                : '10px'
                        };
                        margin-left: ${
                            props.verticalAlign
                                ? ''
                                : props.horizonLineWidth && props.horizonLineWidth !== 0
                                ? props.horizonLineWidth + 'px'
                                : '8px'
                        };
                    }
                }
                `
                : `
                & > * {
                    margin-left: 5px;
                }
                padding-top: 45px;
                padding-left: 12px;
                text-align: right;
        `}
    }
`;

/**
 * 바깥div
 */
const WrapperOutter = styled('div')`
    display: inline-block;
    box-sizing: border-box;
    padding: 2.5%;
    ${(props: Props) =>
        props.verticalAlign || !props.isTitleOrSub
            ? `
            width : ${
                props.verticalAlign
                    ? props.verticalWrapperWidth && props.verticalWrapperWidth !== 0
                        ? props.verticalWrapperWidth + 'px'
                        : '100%'
                    : !props.isTitleOrSub
                    ? ''
                    : '100%'
            };
            height: ${
                props.verticalWrapperHeight && props.verticalWrapperHeight !== 0 ? props.verticalWrapperHeight + 'px' : '100%'
            };
            `
            : `
            min-width: 400px;
            min-height: 200px;
            border-radius: 5px;
            padding-bottom: 1%;
     `}
    ${(props: Props) => props.customTheme && WrapperTheme[props.customTheme]}
    ${(props: Props) => props.css};
`;

const WrapperTheme: styled.theme = {
    light: css`
        border: 2px solid black;
        background: white;
        color: black;
    `,
    dark: css`
        border: 2px solid #5c5d5c;
        background: #353b48;
        color: white;
    `,
    green: css`
        border: 2px solid #9ee4c2;
        background: #9bd87c;
        color: white;
        ${WrapperInner} h3 {
            color: black;
            font-weight: bold;
        }
    `,
};

export interface Props extends JSX.IntrinsicAttributes {
    /** 커스텀 테마, 우선순위 : 글로벌 < 커스텀 < css */
    customTheme?: styled.themeType;
    /** [공통]크기 - 미구현 */
    big?: boolean;
    /** 제목 */
    title?: string;
    /** 내용 */
    subscription?: string;
    /** 세로정렬 */
    verticalAlign?: boolean;
    /** 세로정렬.bottom */
    verticalBottom?: boolean;
    /** 세로정렬.가로(px)
     *
     * css default: 100%
     */
    verticalWrapperWidth?: number;
    /** 세로정렬.세로(px)
     *
     * css default: 100%
     */
    verticalWrapperHeight?: number;
    /** 세로정렬.간격(px)
     *
     * css default: 10px
     */
    verticalLineHeight?: number;
    /** 자식노드 */
    children?: React.ReactNode;
    /** 타이틀 또는 내용 - 가로정렬 */
    isTitleOrSub?: boolean;
    /** 가로정렬.간격(px)
     *
     * css default: 8px
     */
    horizonLineWidth?: number;
}

/**
 *  1. 가로 정렬 : CONFIRM팝업
 *  2. 세로 정렬 : 여러기능..
 *
 *  ### BIG 미구현
 */
const Wrapper = ({ title, subscription, children, ...props }: Props) => {
    return (
        <WrapperOutter {...props}>
            <WrapperInner {...props}>
                {title ? <h3>{title}</h3> : <h3>&nbsp;</h3>}
                {subscription ? <span>{subscription}</span> : <span>&nbsp;</span>}
                <div>{children}</div>
            </WrapperInner>
        </WrapperOutter>
    );
};

Wrapper.defaultProps = {
    big: false,
    isTitleOrSub: true,
    verticalAlign: false,
};

export default Wrapper;
