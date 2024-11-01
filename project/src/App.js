import DemoRouter from './DemoRouter';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App" >
    <Router>
      <DemoRouter/>
    </Router>
    </div>
  );
}

export default App;
