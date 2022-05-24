import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Resume from './Pages/Resume';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"> 
          <Route index element={<Home />} />
          <Route path='resume' element={<Resume />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
