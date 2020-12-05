import './style/App.scss';
import Table from './component/Table';
import Main from './component/Main';
import AddCars from './component/AddCars';
import { Switch, Route } from 'react-router-dom';



function App() {
  return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/new" component={AddCars} />
      </Switch>
  );
}

export default App;
