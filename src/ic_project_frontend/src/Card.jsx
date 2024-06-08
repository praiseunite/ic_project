import * as React from "react";

function Card(props){
    
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
      title: "",
      content: ""
    });


    function handleChange(event){
        const { name, value } = event.target;

        SVGTextContentElement(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event){
        props.onAdd(note);
        SVGTextContentElement({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function expand(){
        setExpanded(true);
    }
    return(
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input 
                        name="title"
                        onChange={handleChange}
                        value={Note.title}
                        placeholder="Title..."
                    />
                )}

                <tetxtarea
                    name="content"
                    onClick={expand}
                    onChange={handleChange}
                    value={Note.content}
                    placeholder="Write a note..."
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in = {isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default Card;