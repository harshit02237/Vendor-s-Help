import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Name from "./Components/Name.jsx";
import './App.css';
import Button1 from "./Components/Button1.jsx";
import Image from "./Components/Image.jsx";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/login/SignUp.jsx"; // ✅ Make sure this path is correct

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <center>
                        <Image />
                        <Name />
                        <Button1 />
                    </center>
                } />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} /> {/* ✅ Add this */}
            </Routes>
        </Router>
    );
}

export default App;
