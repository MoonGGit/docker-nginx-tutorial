import React from 'react';
import styled, { css } from 'styled-components';
import { ACTION_TYPE, ActionValues, actions } from '../actions/button';
import { ButtonStore } from '../reducers/button';
import { connect } from 'react-redux';

const StyledButton = styled('button').attrs((props: any) => ({
    type: props.btnType || 'button',
}))`
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
    ${(props: Props) => props.customTheme && buttonTheme[props.customTheme]}
    ${(props: Props) => props.css}
`;

const buttonTheme: styled.theme = {
    light: css`
        border: 1px solid black;
        background: white;
        color: black;
    `,
    dark: css`
        background: black;
        color: lightgrey;
    `,
    green: css`
        background: #48b355;
        color: white;
    `,
};

/***********
 ** 프롭스 **
 ***********/
export type Props = JSX.IntrinsicAttributes & {
    /** 커스텀 테마, 우선순위 : 글로벌 < 커스텀 < css */
    customTheme?: styled.themeType;
    /** [공통]크기  */
    big?: boolean;
    /** 버튼 텍스트 */
    btnText?: string;
    /** 버튼 타입 */
    btnType?: 'submit' | 'button';
    /** 이벤트
     *
     * how to write when action exists ⇒
     *
     * onClick(event, actions[action.type](actionProps))
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>, ...props: any) => any;
    /** 리덕스 액션
     *
     * {type: ACTION_TYPE,
     * [key:string] : any}
     */
    action?: ActionValues[ACTION_TYPE];
    [k: string]: any;
};

/**********
 ** 버튼 **
 **********/
const Button = ({ action, onClick, ...props }: Props) => {
    const DefaultButton = (
        <StyledButton onClick={onClick} {...props}>
            {props.btnText}
        </StyledButton>
    );
    if (action) {
        /****************
         ** 리덕스 적용 **
         ****************/
        const CombinedButton = (...CombinedProps: any) => {
            console.log(CombinedProps);
            return DefaultButton;
        };

        const mapStateToProps = ({ button }: any): ButtonStore => {
            return { ...button };
        };
        /* const mapDispatchToProps = (dispatch: any) => {
            return {
                actionFunc: () => dispatch(actions[action.type](action.value)),
            };
        }; */
        /* 
        const combinedFunction = (event: React.MouseEvent<HTMLButtonElement>, {dispatch}: any): any => {
            const actionResult = actionFunc(action.value);
            return onClick ? onClick(event, actionResult) : () => actionResult;
        }; */

        const ConnectedButton = connect(mapStateToProps, (dispatch: any) => {
            return { dispatch };
        })(CombinedButton);
        return <ConnectedButton></ConnectedButton>;
    } else {
        return DefaultButton;
    }
};

Button.defaultProps = {
    big: false,
    btnText: 'OK',
};

export default Button;
