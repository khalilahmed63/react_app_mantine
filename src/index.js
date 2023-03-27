import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { useHotkeys, useLocalStorage } from '@mantine/hooks';
// import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { MantineProvider } from '@mantine/core';



const root = ReactDOM.createRoot(document.getElementById('root'));
// // eslint-disable-next-line no-use-before-define, no-mixed-operators
// const [colorScheme, setColorScheme] = useLocalStorage < colorScheme > ({
//   key: 'mantine-color-scheme',
//   defaultValue: 'light',
//   getInitialValueInEffect: true,
// });

// const [colorScheme, setColorScheme] = useLocalStorage('mantine-color-scheme', 'light');

// const toggleColorScheme = (value) => {
//   setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   useHotkeys([['mod+J', () => toggleColorScheme()]]);
// }



// const dark = colorScheme === 'dark';
root.render(
  // <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      // colorScheme
      /** Put your mantine theme override here */
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider >
  // </ColorSchemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();