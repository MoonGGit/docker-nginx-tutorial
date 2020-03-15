import React from 'react';
import styled from 'styled-components';

const DefaultInput = styled('input')`
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
`;

const InputThemes = {
    light: styled(DefaultInput)`
        background: white;

        &::placeholder {
            color: #ababab;
        }
        ${(props: any) => props.css};
    `,
    dark: styled(DefaultInput)`
        background: #5f5e5e;
        border-color: #999999;
        color: white;

        &::placeholder {
            color: #9c9a9a;
        }
        ${(props: any) => props.css};
    `,
    green: styled(DefaultInput)`
        background: #7bed9f;
        border-color: #85d087;
        color: #025802;

        &::placeholder {
            color: #0fa03d66;
        }
        ${(props: any) => props.css};
    `,
};

export interface Props {
    /** 테마 */
    theme: 'light' | 'dark' | 'green';
    /** [공통]크기 --미구현 */
    big?: boolean;
    /** placeholder */
    placeholder?: string;
    /** 입력 이벤트 */
    onChange?: (event: React.FormEvent<HTMLInputElement>) => any;
}

const Input = ({ theme, ...props }: Props) => {
    const Ip = InputThemes[theme];
    return <Ip {...props}></Ip>;
};

Input.defaultProps = {
    theme: 'light',
    big: false,
    placeholder: 'placeholder',
};

export default Input;
