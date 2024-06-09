// import { Delete } from "@mui/icons-material";
// import { Delete } from "@mui/icons-material/Delete";
import { DeleteForever } from '@mui/icons-material';
// import DeleteIcon from '@mui/icons-material/Delete';
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
                <h3>Delete</h3>
                <DeleteForever />
                {/* <Delete/> */}
            </button>
        </div>
    );
}

export default Note;