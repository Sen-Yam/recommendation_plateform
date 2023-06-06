import './App.css';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from './Components/NavBar';
const theme = createTheme({

  palette: {
    neutral: {
      main: '#FF934C',
      contrastText: '#000000 ',
    },
  },
});

function App() {
  return <> hellooo
  <NavBar/>
  
  
   </>
    {/* <div className="App">
      <ThemeProvider theme={theme}>
  <Button color="neutral" variant="outlined" size='medium'>
    neutral
  </Button>
</ThemeProvider>

      
    </div>
  ); */}
}

export default App;
