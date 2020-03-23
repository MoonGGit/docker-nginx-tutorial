import React from 'react';
import styled from 'styled-components';
import Wrapper, { Props as WrapperProps } from './Wrapper';
import Button, { Props as ButtonProps } from './Button';
import Input, { Props as InputProps } from './Input';

const WrapperBlockBox = styled('div')`
    width: 100%;
    height: 100%;
    ${(props: Props) =>
        props.backgroundBlock
            ? `
            position: fixed;
            top: 0;
            left: 0;
            display:flex;
            justify-content:center;
            align-items:center;
            `
            : `
            `};
`;

const BlockBox = styled('div')`
    ${(props: Props) =>
        props.backgroundBlock
            ? `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: lightgrey;
            z-index: -1;
            `
            : `
            display: none;
            `};
`;

export interface ComponentProps extends ButtonProps, InputProps {
    type: 'BUTTON' | 'INPUT';
}

export interface Props extends WrapperProps, JSX.IntrinsicAttributes {
    /** 배경 블록 */
    backgroundBlock: boolean;
    /** 컴포넌트(구현: 버튼, 인풋) */
    components?: ComponentProps[];
    /** 기타 커스텀 컴포넌트 */
    children?: React.ReactNode;
}

const WrapperImple = ({ backgroundBlock, components, children, ...props }: Props) => {
    return (
        <WrapperBlockBox backgroundBlock={backgroundBlock} {...props}>
            <BlockBox backgroundBlock={backgroundBlock}></BlockBox>
            <Wrapper {...props}>
                {components && components?.length > 0
                    ? components.map((component, index) => {
                          return component.type === 'BUTTON' ? (
                              <Button key={index} {...component}></Button>
                          ) : component.type === 'INPUT' ? (
                              <Input key={index} {...component}></Input>
                          ) : (
                              ''
                          );
                      })
                    : ''}
                {children}
            </Wrapper>
        </WrapperBlockBox>
    );
};

WrapperImple.defaultProps = {
    backgroundBlock: false,
    ...Wrapper.defaultProps,
};

export default WrapperImple;
