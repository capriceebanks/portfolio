import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';

import App from './App';
import theme from "./theme"

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Router>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </Router>
  </ChakraProvider>,
    document.getElementById('root')
);
