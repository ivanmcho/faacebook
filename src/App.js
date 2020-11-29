import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage/LoginPage'
import HeaderArea from './HeaderArea/HeaderArea'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="LoginPage" exact={true} component={LoginPage}/>
        <Route path="" component={HeaderArea} />
      </Switch>
    </div>
  );
}

export default App;
