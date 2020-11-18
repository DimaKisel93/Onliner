import './App.css';
import Table from './component/Table';
import AddCars from './component/AddCars';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Table} />
        <Route exact path="/new" component={AddCars} />
      </Switch>
  );
}

export default App;
