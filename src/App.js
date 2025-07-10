import './App.css';
import Header from './components/Header';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
  return (
    <div className="container">
      <Header/>
      <div className="weather-data">
        <LeftSide/>
        <RightSide/>
      </div>

    </div>
  );
}

export default App;
