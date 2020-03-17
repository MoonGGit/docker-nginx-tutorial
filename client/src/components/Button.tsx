import React from 'react';
import styled from 'styled-components';

const DefaultButton = styled('button')`
    min-width: 100px;
    border: none;
    height: 35px;
    border-radius: 5px;
    box-sizing: border-box;
    font-weight: bold;
    font-size: ${(props: Props) => (props.big ? '20px' : '13px')};
    &:hover {
        border: 1px solid #00a8ff;
    }
`;

const ButtonThemes = {
    light: styled(DefaultButton)`
        border: 1px solid black;
        background: white;
        color: black;
        ${(props: any) => props.css};
    `,
    dark: styled(DefaultButton)`
        background: black;
        color: lightgrey;
        ${(props: any) => props.css};
    `,
    green: styled(DefaultButton)`
        background: #48b355;
        color: white;
        ${(props: any) => props.css};
    `,
};

export interface Props {
    /** [공통]테마 */
    theme: 'dark' | 'light' | 'green';
    /** [공통]크기  */
    big?: boolean;
    /** 버튼 텍스트 */
    btnText?: string;
    /** 이벤트 */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any;
}

/**
 * `버튼`
 */
const Button = ({ theme, ...props }: Props) => {
    const Btn = ButtonThemes[theme];
    return <Btn {...props}>{props.btnText}</Btn>;
};

Button.defaultProps = {
    theme: 'light',
    big: false,
    btnText: 'OK',
};

export default Button;
