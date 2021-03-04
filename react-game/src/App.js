import React, {useState, useEffect} from "react"
import "./styles/app-style.css";
import Header from "./components/Header";
import ShapeChoice from "./components/ShapeChoice";
import Footer from "./components/Footer";
import Result from "./components/Result";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Tablescore from "./components/Tablescore";


function App() {
    let [playerScore, setPlayerScore] = useState(0);
    let [botScore, setBotScore] = useState(0);
    let [playerShape, setPlayerShape] = useState("");
    let [botShape, setBotShape] = useState("");
    let [isMute, toggleSoundMode] = useState(false);

    function getRandomShape() {
        const shapes = ["rock", "scissors", "paper"];
        const shapeNumber = Math.floor(Math.random() * shapes.length);
        return shapes[shapeNumber];
    }

    useEffect(() => setBotShape(getRandomShape()), [botShape]);
    return (
        <Router>
                <div className="game-wrapper">
                    <div className="shadow-layer">
                        <div className="game-body">
                    <Header  />
                    <Tablescore playerScoreValue={playerScore} botScoreValue={botScore} />
                    <Switch>
                        <Route path="/play">
                            <Result playerScore = {playerScore}
                                    setPlayerScore = {setPlayerScore}
                                    botScore = {botScore}
                                    setBotScore = {setBotScore}
                                    playerShape = {playerShape}
                                    botShape = {botShape}
                                    setBotShape = {setBotShape}
                            />
                        </Route>
                        <Route path="/">
                            <ShapeChoice setPlayerShape={setPlayerShape} />
                        </Route>
                    </Switch>
                    <Footer isMute={isMute} toggleSoundMode={toggleSoundMode}/>
                        </div>
                </div>
            </div>

        </Router>
    )
}

export default App;
