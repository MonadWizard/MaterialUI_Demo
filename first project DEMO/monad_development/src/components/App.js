import Container from '@material-ui/core/Container';
import Header from './ui/Header';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>

            <Header />

            <Container>
                <h1>Monad Wizard</h1>
            </Container>
            </ThemeProvider>

        </div>
    );
}

export default App;
