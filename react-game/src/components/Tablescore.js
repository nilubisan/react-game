import "../styles/tablescore.css"
import React from "react";
export default function Tablescore(props) {

    return (
        <div className="tablescore">
            <h2 className="tablescore__title"> Score </h2>
            <div className="tablescore__score">
                <div className="score">
                    <span id="player-score" className="score__value"> {props.playerScoreValue} </span>
                    <span className="score__party"> You </span>
                </div>
                <span className="score__divider"> : </span>
                <div className="score">
                    <span id="bot-score" className="score__value"> {props.botScoreValue} </span>
                    <span className="score__party"> Bot </span>
                </div>
            </div>
        </div>
    )
}