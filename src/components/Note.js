import {MdDeleteForever} from 'react-icons/md';

const Note = ({note, handleDeleteNote})=>{
    return (
        <div className="note">
            <span>
               {note.text}
            </span>
            <div className="note-footer">
                <small>{note.date}</small>
                <MdDeleteForever className='delete-icon'size='1.3rem' onClick = {()=> handleDeleteNote(note.id)}/>
            </div>
        </div>
    );
}
export default Note;