import "../styles/shape-choice.css"
import React from "react";
import rockImage from "../images/rock.png";
import paperImage from "../images/paper.png";
import scissorsImage from "../images/scissors.png";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

export default function ShapeChoice(props) {
    return (
        <div className="shapes__wrapper">
            <div className="shapes__row">
                <Link to="/play">
                    <img className="shapes__item-img" id="rock" src={rockImage} alt="rock" onClick={(e) => props.setPlayerShape(e.currentTarget.id)} />
                </Link>
                <Link to="/play">
                    <img className="shapes__item-img" id="paper" src={paperImage} alt="paper" onClick={(e) => props.setPlayerShape(e.currentTarget.id)} />
                </Link>
            </div>
            <div className="shapes__row center">
                <Link to="/play">
                    <img className="shapes__item-img" id="scissors" src={scissorsImage} alt="scissors" onClick={(e) => props.setPlayerShape(e.currentTarget.id)} />
                </Link>
            </div>

        </div>
    )
}