import { ThemeProvider } from '@mui/system';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routers/Router/Router';
import theme from './Thame/Thame';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <RouterProvider router={router}>

        </RouterProvider>

      </div>
    </ThemeProvider>
  );
}

export default App;
