import logo from './logo.svg';
import './App.css';
import { Header } from './Header.tsx';

function App() {
  return (
    <div className="App">
      <Header title="header" className="testing" color="purple">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Konjo
        </p>
        </Header>
    </div>
  );
}

export default App;
