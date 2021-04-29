import React from 'react';
import { Field,reduxForm } from 'redux-form';

class NotesForm extends React.Component{

    onSubmit=(formValues)=>{
        this.props.onSubmit(formValues)
    }

    renderContent(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form'>
                <div class="field">
                    <label>Title</label>
                    <div>
                        <Field
                            name="Title"
                            component="input"
                            type="text"
                            placeholder="title"
                        />
                    </div>
                </div>
                <div>
                    <label>Notes</label>
                    <div>
                        <Field name="notes" component="textarea">
                        <textarea ></textarea>
                        </Field>
                    </div>
                </div>
                <button className='ui button primary'>Submit</button>
            </form>
        );
    }
    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        );
    }
}


export default reduxForm({
    form:'NotesForm'
}) (NotesForm);