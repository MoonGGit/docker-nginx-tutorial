import React from 'react';
import WrapperImple, { Props, ComponentProps } from './components/WrapperImpl';
import image from './assets/images/background/ALSPQM_AOSK4513.jpg';
import ThemeProvider from './styles/ThemeProvider';
import configureStore from './store/store';
import reducer from './reducers/index';
import { Provider } from 'react-redux';
import { ACTION_TYPE } from './actions/button';
import Button from './components/Button';
import Test from './components/test';

const Components: ComponentProps[] = [
    {
        customTheme: 'dark',
        type: 'INPUT',
        placeholder: 'ID',
        css: {
            opacity: 0.7,
        },
    },
    {
        customTheme: 'dark',
        type: 'INPUT',
        placeholder: 'PASSWORD',
        css: {
            opacity: 0.7,
        },
    },
    {
        customTheme: 'light',
        type: 'BUTTON',
        btnText: 'LOGIN',
        css: {
            opacity: 0.7,
            fontSize: '30px',
        },
        action: {
            type: ACTION_TYPE.TEST1,
            value: { testValue1: 'test입니당!' },
        },
    },
    {
        customTheme: 'dark',
        type: 'BUTTON',
        btnText: 'SING UP',
        css: {
            opacity: 0.7,
        },
    },
];

const props: Props = {
    backgroundBlock: false,
    title: 'asd',
    subscription: 'test',
    verticalWrapperWidth: 300,
    verticalWrapperHeight: 300,
    isTitleOrSub: true,
    verticalAlign: true,
    verticalBottom: true,
    components: Components,
    customTheme: 'green',
    css: {
        backgroundImage: 'url(' + image + ')',
        backgroundSize: '100% 100%',
        border: 'none',
    },
};
const store = configureStore(reducer, {});

const Main = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme="dark">
                <WrapperImple {...props}></WrapperImple>
            </ThemeProvider>
        </Provider>
    );
};

export default Main;
