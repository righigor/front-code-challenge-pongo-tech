import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create-session" element={<FormPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
