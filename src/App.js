import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import Header from './components/header/Header.jsx';
import Home from './components/home/Home';
import Card from './components/card/Card.jsx';
import { TemplateProvider } from './templets/TemplateProvider.jsx';
import ContextProvider from './context/ContexPovider.jsx';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Card" component={Card} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>


    </TemplateProvider>
  );
}

export default App;
