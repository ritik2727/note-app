import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FetchNote } from '../../actions';


class NotesShow extends React.Component{
    componentDidMount(){
        this.props.FetchNote(this.props.match.params.id);
    }
    render(){
        if(!this.props.note){
            return <div>Loading</div>
        }
    return (
        <div>
            <Link to='/' className="ui teal tag label"><h2>{this.props.note.Title}</h2></Link>
            <div className="ui blue massive message">
            {this.props.note.notes}
            </div>
        </div>
    );
}
};

const mapStateToProps = (state,ownProps) =>{
    return {
        note:state.notes[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{FetchNote})(NotesShow);