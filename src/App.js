import logo from './logo.svg';

import Advice from './Advice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Farmer says:
        </p>
        
        <Advice/>
      </header>
    </div>
  );
}

export default App;
