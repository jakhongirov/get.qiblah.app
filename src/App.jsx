import { Routes, Route } from "react-router-dom";
import Redirect from './redirect/redirect';

function App() {
  return (
    <Routes>
      <Route path="/:campaign_id" element={< Redirect />} />
    </Routes>
  );
}

export default App;
