import {createAction} from "redux-actions";
import {BooksListTypes} from "./booksTypes";
import {booksListApi} from "api/books"

export const booksAsyncAction = (page,limit)=>{
    let booksAction = createAction(BooksListTypes,data=>data)

    return async(dispatch)=>{
        let data = await booksListApi(page,limit);
       dispatch(booksAction(data.data.list))
    }
}