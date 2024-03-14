import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './component/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*All routes here */}
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
