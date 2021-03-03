import "../styles/game-result.css";
import React, {useState, useEffect, useRef} from "react"
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom"
import Button from '@material-ui/core/Button'
import RefreshIcon from '@material-ui/icons/Refresh';
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";
import animatedShapes from "../images/animated.gif";
import successSound from "../sounds/success.mp3";
import failureSound from "../sounds/failure.mp3";
import shuffleAudio from "../sounds/process.mp3";
import drawSound from "../sounds/draw.mp3";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export default function Result(props) {
    const shapes = {
        "rock": rock,
        "paper": paper,
        "scissors": scissors
    };
    const playAudio = "play";
    const stopAudio = "stop";
    const gameSuccess = "win";
    const gameFailure = "lose";
    const gameDraw = "draw";
    let [isRoundOver, setRoundOver] = useState(false);
    let [gameOutcome, setGameOutcome] = useState("");
    let [visibilityClass, setVisibilityClass] = useState("invisible");
    let [botShapeImg, setBotShapeImg] = useState(animatedShapes);
    let shuffleSound = new Audio(shuffleAudio);

    function getGameOutcome(userShape, botShape) {
        let result;
        if(userShape === "rock") {
            if(botShape === "rock") result = gameDraw;
            if(botShape === "scissors") result = gameSuccess;
            if(botShape === "paper") result = gameFailure;
        }
        if(userShape === "scissors") {
            if(botShape === "rock") result = gameFailure;
            if(botShape === "scissors") result = gameDraw;
            if(botShape === "paper") result = gameSuccess;
        }
        if(userShape === "paper") {
            if(botShape === "rock") result = gameSuccess;
            if(botShape === "scissors") result = gameFailure;
            if(botShape === "paper") result = gameDraw;
        }
        return result;
    }

    function displayScore() {
            if(gameOutcome === "win") props.setPlayerScore(props.playerScore + 1);
            else if(gameOutcome === "lose")  props.setBotScore(props.botScore + 1);
            setRoundOver(true);
    }

    function handleShuffleSound(action) {
            if (action === playAudio) {
                shuffleSound.play();
            }
            else if(action === stopAudio) {
                shuffleSound.pause();
            }
        }


    function playGameSound() {
        let gameSound;
        if(gameOutcome === gameSuccess) {
            gameSound = new Audio(successSound);
            gameSound.play();
        } else if(gameOutcome === gameFailure) {
            gameSound = new Audio(failureSound);
            gameSound.play();
        } else if(gameOutcome === gameDraw) {
            gameSound = new Audio(drawSound);
            gameSound.play();
        }
    }


    useEffect(() => {
        setGameOutcome(getGameOutcome(props.playerShape, props.botShape));
        if(!isRoundOver) {
            handleShuffleSound(playAudio);
        }

        setTimeout(() => {
            if(!isRoundOver && props.playerShape) {
                handleShuffleSound(stopAudio);
                displayScore();
                setVisibilityClass("visible");
                setBotShapeImg(shapes[props.botShape]);
                setTimeout(() => {
                    playGameSound();
                }, 500);
            }
        }, 5000);
    });

    if(!props.playerShape) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <div className="game-result__wrapper">
            <h2 className={"game-result__title " + visibilityClass}> {gameOutcome !== "draw" && gameOutcome.length > 0 && "You"}  {gameOutcome} </h2>
            <div className="game-result__shapes">
                <div id="player-shape" className="shape__inner">
                    <h3 className="shape__title">Your shape</h3>
                    <div className="shape__body">
                        <img src={shapes[props.playerShape]} className="shape__img" />
                    </div>
                </div>
                <div id="bot-shape" className="shape__inner">
                    <h3 className="shape__title">Bot's shape</h3>
                    <div className="shape__body">
                        <img src={botShapeImg} className="shape__img" />
                    </div>
                </div>
            </div>
            <div className="game-result__buttons-wrapper">
                <Link to="/" className={"game-result__button " + visibilityClass} >
                    <Button
                        className={visibilityClass}
                        startIcon={<RefreshIcon />}
                        variant="contained"
                        size="large"
                        color="primary"
                        style={{
                            fontWeight: "bold"
                        }}
                        onClick={() => props.setBotShape("")}
                    >
                        Try again
                    </Button>
                </Link>
                <Link to="/" className={"game-result__button " + visibilityClass}>
                    <Button
                        className={visibilityClass}
                        startIcon={<PlayArrowIcon />}
                        variant="contained"
                        size="large"
                        color="secondary"
                        style={{
                            fontWeight: "bold"
                        }}
                        onClick={() => {
                            props.setBotShape("");
                            props.setPlayerScore(0);
                            props.setBotScore(0);
                        }
                        }
                    >
                        New Game
                    </Button>
                </Link>
            </div>
        </div>
    )
}