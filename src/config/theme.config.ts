import type { DefaultTheme } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const airlineTheme: DefaultTheme = {
  color: {
    black_001: '#000',
    pink_001: '#F21170',
    purple_001: '#72147E',
    white_001: '#fff',
    white_002: '#FAF3F3',
    yellow_001: '#FED049',
    orange_001: '#FF5200',
  },
};

const GlobalStyle = createGlobalStyle`
*,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

 body {
    background: ${({ theme }) => theme.color.white_001};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    color: ${({ theme }) => theme.color.black_001};
  }

  .form {
    max-width: 800px;
    margin: 0 auto;
  }

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.color.white_001};
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
    height: 55px;
  }

  .label,
  section > label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    color: ${({ theme }) => theme.color.white_001};
    font-size: 14px;
    font-weight: 200;
  }

  input[type="submit"],
  .button {
    background-color: ${({ theme }) => theme.color.pink_001};
    color: ${({ theme }) => theme.color.white_001};
    border: none;
    margin-top: 40px;
    padding: 20px 0;
    font-size: 16px;
    font-weight: bolder;
    letter-spacing: 1px;
    display: block;
    appearance: none;
    border-radius: 4px;
    width: 100%;


    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.color.yellow_001};
    }
  }

  .grey {
      background-color: grey;

      &:hover {
        cursor: unset;
        background-color: grey;
      }
    }

  .container-buttons {
    display: flex;
    justify-content: space-around;

    .container-button {
      display: flex;
      width: 300px;
    }
  }
  
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  .Error {
    color:  ${({ theme }) => theme.color.yellow_001};
    font-weight: bold;
    font-size: 12px;
  }

  .href-purple {
    text-align: center;
    text-decoration: none;
    background-color: ${({ theme }) => theme.color.purple_001};
  }

  @media (max-width: 900px) {
    .container {
      grid-template-columns: 1fr;
      padding: 20px;
    }    
    .container-buttons {
      display: block;
      .container-button {
        width: 100%;
      }
    }
  }
`;

export { airlineTheme, GlobalStyle };
