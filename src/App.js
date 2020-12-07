import './style/App.scss';
// import Table from './component/Table';
import Main from './component/Main';
import Car from './component/Car';
import { Switch, Route } from 'react-router-dom';




function App() {

  return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/car" component={Car} />
        {/* <Route exact path="/new" component={AddCars} /> */}
      </Switch>
  );
}

export default App;
