import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { persister, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyle } from './globalStyle/globalStyle';
import { Container, Wrapper } from './globalStyle/layout';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <BrowserRouter>
            <PersistGate persistor={persister}>
              <App />
            </PersistGate>
          </BrowserRouter>
        </Container>
      </Wrapper>
    </Provider>
);
