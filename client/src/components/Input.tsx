import React from 'react';
import styled, { css } from 'styled-components';

const StyledInput = styled('input').attrs({
    type: 'text',
})`
    min-width: 150px;
    min-height: 35px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    border-radius: 5px;
    border: 2px solid #777171;
    box-sizing: border-box;

    &::placeholder {
        font-size: 12px;
        text-align: center;
    }
    ${(props: Props) => props.customTheme && InputTheme[props.customTheme]}
    ${(props: Props) => props.css}
`;

const InputTheme: styled.theme = {
    light: css`
        background: white;

        &::placeholder {
            color: #ababab;
        }
    `,
    dark: css`
        background: #5f5e5e;
        border-color: #999999;
        color: white;

        &::placeholder {
            color: #9c9a9a;
        }
    `,
    green: css`
        background: #7bed9f;
        border-color: #85d087;
        color: #025802;

        &::placeholder {
            color: #0fa03d66;
        }
    `,
};

export interface Props extends JSX.IntrinsicAttributes {
    /** 커스텀 테마, 우선순위 : 글로벌 < 커스텀 < css */
    customTheme?: styled.themeType;
    /** [공통]크기 --미구현 */
    big?: boolean;
    /** placeholder */
    placeholder?: string;
    /** 입력 이벤트 */
    onChange?: (event: React.FormEvent<HTMLInputElement>) => any;
}

const Input = (props: Props) => {
    return <StyledInput {...props}></StyledInput>;
};

Input.defaultProps = {
    big: false,
    placeholder: 'placeholder',
};

export default Input;
