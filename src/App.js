import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/billing" element={<Layout />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
