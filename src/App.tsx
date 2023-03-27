import React from 'react';
import './App.css';
import {HomePage} from "./app/containers/HomePage";
import {AssessmentPage} from "./app/containers/AssessmentPage";
import {ResultPage} from "./app/containers/ResultPage";
import {TrainingPage} from "./app/containers/TrainingPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Assessment" element={<AssessmentPage />} />
                <Route path="/Result" element={<ResultPage />} />
                <Route path="/Training" element={<TrainingPage />} />
            </Routes>
        </Router>
        )
}

export default App;
