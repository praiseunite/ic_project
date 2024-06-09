import { useState, useEffect } from 'react';
import { ic_project_backend } from 'declarations/ic_project_backend';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import Card from './Card';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    ic_project_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }
  
  const [notes, setNotes] = useState([]);
 
 
  function createNote(newNote){
      setNotes(prevNotes => {
        ic_project_backend.createNote(newNote.title, newNote.content)
        return [newNote, ...prevNotes];
      });
  }
  useEffect(() => {
    console.log("useEffect is triggered")
    fetchData();
  }, []);
  
async function fetchData(){
  const notesArray = await ic_project_backend.readNotes();
  setNotes(notesArray);
}

function deleteNote(id){
  ic_project_backend.delete(id);
  setNotes(prevNotes => {
    return prevNotes.filter((noteItem, index) => {
      return index != id;
    });
  });
}

  return (
    <main>
      <Header />
      <Card onAdd={createNote}/>
      {notes.map((noteItem, index) => {
        return(
          <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </main>
  );
}

export default App;
