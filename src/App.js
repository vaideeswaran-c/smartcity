import React, { useEffect } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import SignIn from './SignIn';
import NotFoundPage from './NotFoundPage';
import SignUp from './SignUp';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home';
import NewsBoard from './Newsboard/Blog';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Home/theme';
import JobBoard from './Jobboard/Posts';
import Tourists from './Tourists/Posts';
import Hotelsandtaxis from './Hoteslandtaxis/Posts';
import WasteCalculation from './WasteCalculation';
import EnergyCalculation from './EnergyCalculation';
import About from './About/Album';

function App() {

  useEffect(() => {
    return () => {
        localStorage.clear();
    }
}, [])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/newsboard" component={NewsBoard} />
          <Route path="/jobboard" component={JobBoard} />
          <Route path="/tourists" component={Tourists} />
          <Route path="/hotelsandtaxis" component={Hotelsandtaxis} />
          <Route path="/wastecalculation" component={WasteCalculation} />
          <Route path="/energycalculation" component={EnergyCalculation} />
          <Route path="/about" component={About} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
