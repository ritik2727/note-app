import notes from "../apis/notes"
import history from "../history";
import { CREATE_NOTE, DELETE_NOTE, EDIT_NOTE, FETCH_NOTE, FETCH_NOTES } from "./type";


export const CreateNote = (fromValues) =>async (dispatch) => {
    const response = await notes.post('/notes',fromValues);

    dispatch({type:CREATE_NOTE,payload:response.data});

    history.push('/');
}

export const FetchNotes = () =>async (dispatch) => {
    const response = await notes.get('/notes');

    dispatch({type:FETCH_NOTES,payload:response.data});
}

export const FetchNote = (id) =>async (dispatch) => {
    const response = await notes.get(`/notes/${id}`);

    dispatch({type:FETCH_NOTE,payload:response.data});
}

export const EditNote =(id,fromValues) =>async (dispatch) => {
    const response = await notes.patch(`/notes/${id}`,fromValues);

    dispatch({type:EDIT_NOTE,payload:response.data});

    history.push('/');
}

export const DeleteNote = (id) =>async (dispatch) => {
     await notes.delete(`/notes/${id}`);

    dispatch({type:DELETE_NOTE,payload:id});

    history.push('/');
}