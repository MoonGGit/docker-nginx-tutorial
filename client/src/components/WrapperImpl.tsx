import React from 'react';
import Button, { Props as ButtonProps } from './Button';
import Wrapper, { Props as WrapperProps } from './Wrapper';

interface Props extends ButtonProps, WrapperProps {
    /** 버튼 유무 */
    btn?: boolean;
    /** 버튼이름 배열 */
    btnTextArr?: string[];
    /** 인풋 유무 */
    input?: boolean;
    /** 인풋 개수 */
    inputCount?: number;
    /** 인풋이름 배열 */
    inputTextArr?: string[];
}

const styles = {
    btnIsGreaterThanZero: {
        marginLeft: '5px',
    },
};

const ButtonWrapper = ({ btn, btnTextArr, input, inputCount, inputTextArr, ...props }: Props) => {
    return (
        <Wrapper {...props}>
            {btn &&
                (btnTextArr !== undefined && btnTextArr.length > 0
                    ? btnTextArr.map((btnText, index) => {
                          return <Button css={styles.btnIsGreaterThanZero} key={index} {...{ ...props, btnText }}></Button>;
                      })
                    : props.btnText && <Button {...props}></Button>)}
        </Wrapper>
    );
};

ButtonWrapper.defaultProps = {
    ...Button.defaultProps,
    ...Wrapper.defaultProps,
};

export default ButtonWrapper;
