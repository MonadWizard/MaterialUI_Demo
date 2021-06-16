import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './ui/Header';
import theme from './ui/Theme';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={() => <div>Home</div>} />
                        <Route exact path="/services" component={() => <div>Services</div>} />

                        <Route exact path="/revolution" component={() => <div>revolution</div>} />
                        <Route exact path="/about" component={() => <div>about</div>} />
                        <Route exact path="/contact" component={() => <div>Contract</div>} />
                        <Route exact path="/estimate" component={() => <div>estimate</div>} />

                        <Route
                            exact
                            path="/customsoftware"
                            component={() => <div>Custom Software</div>}
                        />
                        <Route exact path="/mobileapps" component={() => <div>mobile apps</div>} />
                        <Route exact path="/websites" component={() => <div>Web sites</div>} />
                    </Switch>
                </BrowserRouter>

                <Container>
                    <h1>Monad Wizard</h1>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
