import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import MainComponent from './Maincomponent';

function App(props) {
  console.log(props);
  return (
    <Router>
      <MainComponent /> 
    </Router>
  );
}

export default App;
