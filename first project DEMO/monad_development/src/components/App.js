import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './ui/Header';
import theme from './ui/Theme';

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
