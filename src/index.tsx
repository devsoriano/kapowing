import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { GlobalStyle, airlineTheme } from './config/theme.config';
import { ThemeProvider } from 'styled-components';
import App from './App';
import store from './redux/store';
import './config/i18n';

const Index = () => (
  <React.StrictMode>
    <Suspense fallback={<p>loading .....</p>}>
      <ThemeProvider theme={airlineTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
);

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
