import logo from './logo.svg';
import './App.css';
import Experiences from './components/Experiences';
import { useState } from 'react';

function App() {
  const [experiences, setExperiences] = useState([
    {id:1, type: 'film', medium:'DVD', name: 'Mephisto', date:'1.3.2022'},
    {id:2, type: 'theater', medium:'Pedrolino', name: 'Pierke', date:'5.3.2022'},
  ]);
  return (
    <div className="App">
      <Experiences experiences={experiences}></Experiences>
    </div>
  );
}

export default App;
