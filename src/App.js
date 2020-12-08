import './style/App.scss';
import Main from './component/Main';
import Car from './component/Car';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/car/:carId" component={Car} />
        {/* <Route exact path="/new" component={AddCars} /> */}
      </Switch>
  );
}

export default App;
