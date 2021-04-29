import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FetchNotes } from '../../actions';


class NotesList extends React.Component{
    componentDidMount(){
        this.props.FetchNotes();
    }

    renderButton(note){
        return(
            <div  className='right floated content' >
                    <Link to={`/notes/edit/${note.id}`}>
                        <i className="edit icon" style={{color:'green'}}></i>
                    </Link>
                    <Link to={`/notes/delete/${note.id}`} >
                    <i className="trash alternate icon" style={{color:'red'}}></i>
                    </Link>
            </div>
        )
    }
    renderContent(note){
        return(
            <div class="ui card" key={note.id}>
            <div class="content">
              <div class="right floated meta">{this.renderButton(note)}</div>
              <div className='ui header'>
              <Link to={`/notes/show/${note.id}`} >{note.Title}
            </Link>
            </div>
            </div>
            </div>

        )
    }
    renderList(){
        return this.props.notes.map(note=>{
            return (
            <div className='column'>
            {this.renderContent(note)}
            </div>
            )
        }
    )
}
render(){
    return(
        <div>
        <div className='ui three column grid '>
        {this.renderList()}
        </div>
        </div>
    )
}
}
            
            
        


const mapStateToProps = (state) =>{
    return {
        notes:Object.values(state.notes)
    }
}
export default connect(mapStateToProps,{FetchNotes}) (NotesList);