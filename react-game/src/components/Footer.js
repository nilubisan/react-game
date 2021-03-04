    import React, {useState} from "react";
    import "../styles/footer.css"
    import SoundButton from "./SoundButton";
    import { IconButton } from '@material-ui/core'


    export default function Footer(props) {
        return (
            <footer>
                <div className="footer__item">
                    <a href="https://rs.school" className="footer__title">RS School 2021</a>
                </div>
                <div id="sound-control" className="footer__item">
                    <IconButton
                    size="medium"
             /*       onClick={() => {
                        props.toggleSoundMode(!props.isMute);
                    }} */
                    >
                        <SoundButton isMute = {props.isMute} />
                    </IconButton>
                </div>
            </footer>
        )
    }