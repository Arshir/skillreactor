import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios'

const Note =({note})=>{

  return (

    <li>{note.content}</li>
  )

}


const ListDisplay = ()=>{

  const [notes,setNotes] = useState([])
  const [newNote,setNewNote] = useState(
    'a new note...'
  )
  const [showAll, setShowAll] = useState(true)
 
  useEffect(()=>{
  axios.get('http://localhost:3002/notes')
.then(response=>{
  console.log(response)
  const notes = response.data
  setNotes(notes)
  
  })
 },[])
  
  const noteToShow = showAll? notes : notes.filter(note=>note.important)

  const addNote = (event) =>{
        event.preventDefault()
        console.log('Calling addNote')
        if(!newNote) return
        const noteObject ={
          content:newNote,
          important:Math.random()<0.5,
          id:notes.length +1,
        }
        console.log('Object',noteObject)
        setNotes(notes.concat(noteObject))
        setNewNote('')
       
      }

      const handleNoteChange = (event)=>{
        console.log(event.target.value)
        setNewNote(event.target.value)
      }
  
      return (
         <>
            <ul>
              {noteToShow.map((note) => 
                
                  <Note key={note.id} note={note} />
                
              )}
          </ul>
         <form onSubmit={addNote}>
          <input 
          value={newNote} 
          onChange={handleNoteChange}/>
          <button type="submit">save</button>
          <button onClick={(event)=>{event.preventDefault()
            setShowAll(!showAll) }}> show { showAll? 'Important': 'All'}</button>
         </form>
         </>


      )
}

export default ListDisplay