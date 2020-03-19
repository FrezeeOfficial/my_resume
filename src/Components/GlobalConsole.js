
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    .Console-Modal {
    height: 40%;
    width: 40%;
    display: table;
    margin: 0 auto;
    margin-top: 12%;
    
    border: ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.backgroundColor};
    
    border-radius: 6px;
}

.Console-Modal-Top {
    background-color: #ecf0f1;
    height: 24px;
    width: 100%;
    display: block;
}

.closeConsole {
    height: 10px;
    width: 10px;
    margin-left: 20px;
    border-radius: 5px;
    background-color: #e74c3c;
    position: relative;
    display: -webkit-inline-box;
}

.BackgroundTheme {
    position: fixed;
    height: 100%;
    width: 100%;
    margin: 0;
    background-color: ${({ theme }) => theme.BCol};
}

.IdkConsole {
    height: 10px;
    width: 10px;
    margin-left: 4px;
    border-radius: 5px;
    background-color: #2ecc71;
    position: relative;
    display: -webkit-inline-box;
}

.fullConsole {
    height: 10px;
    width: 10px;
    margin-left: 4px;
    border-radius: 5px;
    background-color: #f1c40f;
    position: relative;
    display: -webkit-inline-box;
}


`;