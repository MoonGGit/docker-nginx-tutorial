import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import themes from './themes';

const globalTheme: styled.theme = {
    light: { fontSize: '100px' },
    dark: { fontSize: '50px' },
    green: {},
};

interface Props {
    theme: styled.themeType;
    children: React.ReactNode;
}

export default (props: Props) => (
    <ThemeProvider theme={{ test: 'test' }}>
        <GlobalStyle></GlobalStyle>
        {props.children}
    </ThemeProvider>
);
