import { DeleteForever } from '@mui/icons-material';
import React from "react";

function Note(props){
    function handleClick(){
        props.onDelete(props.id);
    }
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <DeleteForever />
            </button>
        </div>
    );
}

export default Note;