
import './App.css';
import Homepage from './pages/homepage';
import { Routes, Route } from "react-router-dom"
import Redirect from './pages/redirect';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route path="/starships/:any" element={<Homepage />} />
        <Route path="/:any" element={<Homepage />} />

      </Routes>
    </div>
  );
}

export default App;