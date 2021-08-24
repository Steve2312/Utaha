import React from "react";
import Home from "../screens/Home";
import Logo from '../assets/logo.jpg';
import ReactDOM from 'react-dom';

function Navigation({name}) {

    function toggleTheme() {
        const root = document.getElementsByTagName("html")[0];
        switch (root.className) {
            case "darkmode":
                root.className = "lightmode";
                window.localStorage.setItem("theme", "lightmode");
                break;
            case "lightmode":
                root.className = "darkmode";
                window.localStorage.setItem("theme", "darkmode");
                break;
            default:
                root.className = "darkmode";
                window.localStorage.setItem("theme", "darkmode");
        }
    }

    function returnToHome() {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }

    const classHeader = name == "Home" ? "header" : "header headerWithBack";
    return (
    <div className={classHeader}>
        <div className="navigation">
            <div className="watermark">
                <img src={Logo} alt="Logo"/>
                <span>Utaha</span>
            </div>
            <h4>{name}</h4>
            <span className="toggleThemeButton" onClick={toggleTheme}><i className="fas fa-adjust"></i></span>
        </div>
        {name !== "Home" ? <div className="backWrapper">
            <span className="back" onClick={returnToHome}><i className="fas fa-long-arrow-alt-left"></i>Go Back</span>
        </div> : null}
    </div>
    );
}

export default Navigation;