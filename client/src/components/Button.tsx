import React, { Children } from 'react';
import styled from 'styled-components';

const DefaultButton = styled.button`
    min-width: 100px;
    border: none;
    height: 35px;
    border-radius: 5px;
    box-sizing: border-box
    font-weight: bold;
    font-size: ${(props: Props) => (props.big ? '20px' : '13px')};
    &:hover {
        border: 1px solid #00a8ff;
    }
    ${(props: any) => props.css};
`;

const ButtonThemes = {
    light: styled(DefaultButton)`
        border: 1px solid black;
        background: white;
        color: black;
    `,
    dark: styled(DefaultButton)`
        background: black;
        color: lightgrey;
    `,
    green: styled(DefaultButton)`
        background: #48b355;
        color: white;
    `,
};

export interface Props {
    /** [공통]테마
     *  defailt : light
     */
    theme: 'dark' | 'light' | 'green';
    /** [공통]크기 - 미구현
     *  default : false
     */
    big: boolean;
    /** 버튼 텍스트
     *  default : 'OK'
     */
    btnText: string;
}

/**
 * `버튼`
 */
const Button = ({ theme, btnText, ...props }: Props) => {
    const Btn = ButtonThemes[theme];
    return <Btn {...props}>{btnText}</Btn>;
};

Button.defaultProps = {
    theme: 'light',
    big: false,
    btnText: 'OK',
};

export default Button;
