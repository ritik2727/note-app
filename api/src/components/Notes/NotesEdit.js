import React from 'react';
import { connect } from 'react-redux';
import NotesForm from './NotesForm';
import {EditNote,FetchNote} from '../../actions';
import _ from 'lodash';


class NotesEdit extends React.Component{
    componentDidMount(){
        this.props.FetchNote(this.props.match.params.id);
    }
    onSubmit= (fromValues) =>{
        this.props.EditNote(this.props.match.params.id,fromValues);
    }
    render(){
        if(!this.props.note){
            return <div>Loading</div>;
        }
        return (
            <div>
               <h3>Note Edit</h3> 
                <NotesForm initialValues={_.pick(this.props.note,'Title','notes')} onSubmit={this.onSubmit}/>
            </div>
        );
    }
};

const mapStateToProps = (state,ownProps) =>{
    return {
        note:state.notes[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{EditNote,FetchNote}) (NotesEdit);