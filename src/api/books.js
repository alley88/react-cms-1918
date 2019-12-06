import http from "utils/request";

export const booksListApi = (page,limit)=>http.get({
    url:"/ajax/books/booksList",
    data:{
        page,
        limit
    }
})

export const booksListDel = (id)=>http.get({
    url:"/ajax/books/delete",
    data:{
        id
    }
})