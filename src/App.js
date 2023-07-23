import React, { useEffect } from "react";
import { useState} from "react";
import NotesList from "./components/NotesList";
import {nanoid} from 'nanoid'
import Search from "./components/Search";
import Header from "./components/Header";
const App = ()=>{
  const [Notes, setNotes] = useState([
    {
    id : nanoid(),
    text : "This is my First Note",
    date : "15/04/2023"
  },
  {
    id : nanoid(),
    text : "This is my Second Note",
    date : "15/04/2023"
  },
  {
    id : nanoid(),
    text : "This is my Third Note",
    date : "15/04/2023"
  },
  {
    id : nanoid(),
    text : "This is my Fourth Note",
    date : "15/04/2023"
  },
  {
    id : nanoid(),
    text : "This is my Last Note",
    date : "15/04/2023"
  }
]);
const [searchText, setSearchText] = useState('');
const [darkMode, setDarkMode] = useState(false);
useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'));
  if(savedNotes){
    setNotes(savedNotes);
  }
},[]);
useEffect(()=>{
  localStorage.setItem('notes-app-data', JSON.stringify(Notes));
},[Notes]);

const addNote = (text)=>{
  const date = new Date();
  const newNote = {
    id : nanoid(),
    text : text,
    date : date.toLocaleDateString()
  }
  const newNotes = [...Notes, newNote];
  setNotes(newNotes);
}

const deleteNode = (id) =>{
  const newNotes = Notes.filter((note)=> note.id !== id);
  setNotes(newNotes);
}
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode = {setDarkMode}/>
        <Search handleSearchNote = {setSearchText}/>
        <NotesList 
        notes = {Notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
        handleAddNote = {addNote}
        handleDeleteNote = {deleteNode}
        />
      </div>
    </div>
    );
}
export default App;
