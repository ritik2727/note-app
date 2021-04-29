import React from 'react';
import { Router, Switch,Route } from 'react-router-dom';

import NotesList from './Notes/NotesList';
import NotesCreate from './Notes/NotesCreate';
import NotesDelete from './Notes/NotesDelete';
import NotesEdit from './Notes/NotesEdit';
import NotesShow from './Notes/NotesShow';
import Header from './Header';
import history from '../history';


const App = () =>{
    return (
        <div className='ui container'>       
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={NotesList} />
                        <Route path='/notes/new' exact component={NotesCreate} />
                        <Route path='/notes/delete/:id' exact component={NotesDelete} />
                        <Route path='/notes/edit/:id' exact component={NotesEdit} />
                        <Route path='/notes/show/:id' exact component={NotesShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;