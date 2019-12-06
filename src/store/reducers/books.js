import {handleActions} from 'redux-actions';
import {BooksListTypes} from "actions/books/booksTypes"

const defaultState = {
    booksList:[]
}

export default handleActions({
    [BooksListTypes]:(state,action)=>{
        let booksState = JSON.parse(JSON.stringify(state));
        booksState.booksList = action.payload;
        return booksState;
    }
},defaultState)