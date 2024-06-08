import { useState } from 'react';
import { ic_project_backend } from 'declarations/ic_project_backend';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';

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


function deleteNote(id){
  ic_project_backend.readNotes(id);
  setNotes(prevNotes => {
    return prevNotes.filter((noteItem, index) => {
      return index != id;
    });
  });
}

  return (
    <main>
      <Header />
      {/* <Note 
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
      /> */}
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
      <Footer />
    </main>
  );
}

export default App;
