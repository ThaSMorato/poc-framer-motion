import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { NextPage } from './pages/NextPage';

function App() {
  return (
    
   <BrowserRouter>
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/next-page" exact component={NextPage} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
