import React from 'react';
import WrapperImple, { Props, ComponentProps } from './components/WrapperImpl';
import image from './assets/images/background/ALSPQM_AOSK4513.jpg';
import GlobalStyle from './styles/globalStyle';

const Components: ComponentProps[] = [
    {
        theme: 'dark',
        type: 'INPUT',
        placeholder: 'ID',
        css: {
            opacity: 0.7,
        },
    },
    {
        theme: 'dark',
        type: 'INPUT',
        placeholder: 'PASSWORD',
        css: {
            opacity: 0.7,
        },
    },
    {
        theme: 'dark',
        type: 'BUTTON',
        btnText: 'LOGIN',
        css: {
            opacity: 0.7,
        },
    },
];

const props: Props = {
    backgroundBlock: false,
    verticalAlign: true,
    verticalBottom: true,
    components: Components,
    theme: 'none',
};

const Main = () => {
    return (
        <>
            <WrapperImple css={{ height: '100%', backgroundImage: 'url(' + image + ')', backgroundSize: '100% 100%' }} {...props}></WrapperImple>
        </>
    );
};

export default Main;
