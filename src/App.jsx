import { Routes, Route } from "react-router-dom";
import Redirect from './redirect/redirect';

function App() {
  return (
    <Routes>
      <Route path="/:param2" element={< Redirect />} />
      <Route path="/:param1/:param2" element={< Redirect />} />
      <Route path="/" element={< Redirect />} />
    </Routes>
  );
}

export default App;
