import { createGlobalStyle } from 'styled-components';

import InterThin from 'assets/fonts/Inter-Thin.ttf';
import InterExtraLight from 'assets/fonts/Inter-ExtraLight.ttf';
import InterLight from 'assets/fonts/Inter-Light.ttf';
import InterRegular from 'assets/fonts/Inter-Regular.ttf';
import InterMedium from 'assets/fonts/Inter-Medium.ttf';
import InterSemiBold from 'assets/fonts/Inter-SemiBold.ttf';
import InterBold from 'assets/fonts/Inter-Bold.ttf';
import InterExtraBold from 'assets/fonts/Inter-ExtraBold.ttf';
import InterBlack from 'assets/fonts/Inter-Black.ttf';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter-medium';
  }

  body {
    height: 100%;
  }

  @font-face {
    font-family: 'Inter-Thin';
    src: url(${InterThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter-ExtraLight';
    src: url(${InterExtraLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter-Light';
    src: url(${InterLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter-Regular';
    src: url(${InterRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter-Medium';
    src: url(${InterMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter-SemiBold';
    src: url(${InterSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter-Bold';
    src: url(${InterBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter-ExtraBold';
    src: url(${InterExtraBold}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }


  @font-face {
    font-family: 'Inter-Black';
    src: url(${InterBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }
`;
