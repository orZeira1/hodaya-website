import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Slp from './pages/slp/Slp';
import DizengoffMommies from "./pages/dizzengoff_mommies/DizengoffMommies";

import './App.css';
import './firebase';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Slp/>}/>
                <Route path="/dizengoff_mommies" element={<DizengoffMommies/>}/>
            </Routes>
        </Router>
    );
}

export default App;
