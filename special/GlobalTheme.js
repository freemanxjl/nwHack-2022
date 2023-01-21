import { createGlobalStyle } from 'styled-components';
import storage from 'local-storage-fallback';
  
//Global style that is applied to all pages of site
//Any changes caused by dark mode should go below
export const GlobalStyle = createGlobalStyle`
  body{
    background-color: white;
    color: black;
    // transition: all 0.5s ease-out;
  }
  `;
  
//Get user's preferred site theme, if none, default is 'dark'
export  function getInitialTheme(){
    const savedTheme = storage.getItem('theme');
    return savedTheme ?  JSON.parse(savedTheme) : {mode: 'dark'};
  }