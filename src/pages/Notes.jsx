import React from 'react';
import { CiSearch } from 'react-icons/ci';
import dummyNotes from '../dummy_notes';
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import NoteItem from '../components/NoteItem';

const Notes = () => {
  return (
    <section>
      <header className='notes_header'>
        <h2>My Notes</h2>
        {/*<input type='text' autoFocus placeholder='Keyword...' />*/}
        <button className='btn'><CiSearch /></button>
      </header>
      <div className='notes_container'>
        {
          dummyNotes.map(note => <NoteItem key={note.id} note={note} />)
        }
      </div>
      <Link className='btn add_btn'><BsPlusLg /></Link>
    </section>
  )
}

export default Notes