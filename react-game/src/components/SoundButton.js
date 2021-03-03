import React, {useState} from "react"
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

export default function SoundButton(props) {

    if (!props.isMute) return(
        <VolumeUpIcon />
    )
    else if (props.isMute) {
        return(
            <VolumeOffIcon />
            )
    }
}