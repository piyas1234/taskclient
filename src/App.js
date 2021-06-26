import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBody from './components/Nav/NavBody';
import { BrowserRouter } from 'react-router-dom';
import NavLink from './components/Nav/NavLink';
import Context from './Context';
function App() {
  return (
    <div className="App">
      <Context>
      <BrowserRouter>
      <NavBody></NavBody>
      <NavLink></NavLink>
      </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
