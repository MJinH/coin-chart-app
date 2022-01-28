import './App.css';
import Header from './components/Header';
import Main from "./components/Main"
import { CoinContextProvider } from './context/coinContext';


function App() {
  return (
    <div className="app">
      <CoinContextProvider>
        <Header/>
        <Main />
      </CoinContextProvider>
    </div>
  );
}

export default App;
