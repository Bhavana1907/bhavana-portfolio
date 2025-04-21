import React from "react";
import mock10 from '../assets/images/ai.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2>AI For HealthCare Predictive Analytics</h2></a>
                <p>Check out my project on Diabetes Prediction using Synthetic Data Generation and XGBoost Machine Learning Model here. It showcases our approach to improving data balance and enhancing prediction accuracy in healthcare analytics</p>
            </div>
        </div>
    </div>
    );
}

export default Project;