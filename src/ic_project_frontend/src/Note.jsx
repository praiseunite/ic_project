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
            </button>
        </div>
    );
}

export default Note;