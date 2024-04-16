import { Pagination } from "@mui/material"
import { useContext } from "react"
import { TasksContext,TasksDispatchContext } from "./Context"


export const PaginationFilms = ()=>{
    const tasks= useContext(TasksContext)
    const dispatch = useContext(TasksDispatchContext)
    return(
        
        <Pagination 
        count={1000} 
        color="primary" 
        size="small" 
        page = {tasks.currentPage}
        boundaryCount={0}
          onChange={(event, page) => {
            dispatch({
              type: 'set_page',
              payload: page
            })}}
        />
        
    )

}



