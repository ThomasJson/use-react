import './App.scss';
import React, {useState} from 'react';
import BaseScreen from './screens/baseScreen/BaseScreen';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [cartCounter, setCartCounter] = useState(0);

  const onAdd = () => {
    setCartCounter(c => c + 1);
  }

  return (
    <div className="App">
      <BaseScreen cartCounter={cartCounter} onAdd={onAdd} />
    </div>
  );
}

export default App;
