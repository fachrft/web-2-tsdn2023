import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home.jsx";
import Project from "./assets/pages/Project.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
        </Routes>
    );
};

export default App;
