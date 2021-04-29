import React from 'react';
import { connect } from 'react-redux';
import NotesForm from './NotesForm';
import {CreateNote} from '../../actions';


class NotesCreate extends React.Component{

    onSubmit=(fromValues)=>{
        this.props.CreateNote(fromValues)
    };

    render(){
        return (
            <div>
                 <h3>Create Note</h3>
                <NotesForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
};


export default connect(null,{CreateNote}) (NotesCreate);