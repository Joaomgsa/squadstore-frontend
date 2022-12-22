import { createGlobalStyle, CreateGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
html,body {
    height:100%;
 }
 body{
    font-family:Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:#fff;
 }
 #root {
    max-width: 1080px;
    margin:0 auto;
    padding: 40px 20px;
 }
 button {
    cursor:pointer;
 }

`
export default GlobalStyles;