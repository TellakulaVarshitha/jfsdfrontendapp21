//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './main/Home'
import Routing from './main/Routing'

function App() {
  return (
    <div className="App">
      <Router>
      <Routing/>
      </Router>
     

     
    </div>
  );
}

export default App;
