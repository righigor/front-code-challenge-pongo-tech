import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FormPage from "./pages/FormPage";
import Home from "./pages/Home";
import { useState } from "react";
import { FormType } from "./types/form";
import SessionsPage from "./pages/SessionsPage";

function App() {
  const [sessions, setSessions] = useState<FormType[]>([
    {
      hostname: "Pongo Tech",
      players: 5,
      map: "de_dust2",
      mode: "competitive",
    },
    {
      hostname: "test",
      players: 6,
      map: "de_mirage",
      mode: "wingman",
    }
  ]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-session" element={<FormPage setSessions={setSessions} />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/sessions" element={<SessionsPage sessions={sessions} />} />
      </Routes>
    </Router>
  );
}

export default App;