import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import About from './Pages/About'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"> 
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='resume' element={<Resume />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
