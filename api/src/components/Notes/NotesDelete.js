import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeleteNote, FetchNote } from '../../actions';
import history from '../../history';
import Modal from '../../Modal';


class  NotesDelete extends React.Component{
    componentDidMount(){
        this.props.FetchNote(this.props.match.params.id);
    }
    renderAction(){
        const id = this.props.match.params.id;
        return(
                <React.Fragment>
                <button onClick={()=>this.props.DeleteNote(id)} className='ui button negative'>Delete</button>
                <Link to='/' className='ui button'>Cancel</Link>
                </React.Fragment>
        )
    }
    renderContent(){
        if(!this.props.note){
            return <div>Delete</div>;
        }
        return  `Are you sure you want to delete this Notes with title:${this.props.note.Title}?`

    }
    render(){
    return (
        <div>
            <Modal 
                title='Delete Note' 
                actions={this.renderAction()} 
                content={this.renderContent()} 
                onDismiss={()=>history.push('/')}
            />
        </div>
    );
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        note:state.notes[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{FetchNote,DeleteNote}) (NotesDelete);