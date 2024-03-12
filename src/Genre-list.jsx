import { useContext } from "react";
import { TasksContext,TasksDispatchContext } from "./Context";
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export function GenreList(){
    const tasks= useContext(TasksContext)
    const dispatch = useContext(TasksDispatchContext)



   
            
     
     


    return(
        <div className='items__genres'>
              {/* {tasks.loading ? 'loading ' : tasks.post.map(genre=> */}
                {/* //    ( <label className={genre.name} key={genre.id}><input type="checkbox" id={genre.id}  name="genre" checked={!!genre.checked}  onChange={(e)=>dispatch({ */}
                {/* //     type:'change',
                //     id:genre.id,
                //     checked:e.target.checked
                //   })}/>{`${genre.name}`}</label>) */}

    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={tasks.post}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
            onChange={(e)=>dispatch({ 
            type:'change',
            id:option.name,
            checked:e.target.checked
        })}
          />
          {option.name}
        </li>
      )}
      style={{ width: 296,height:24 }}
      renderInput={(params) => (
        <TextField {...params} label="Жанры"  placeholder="Favorites" />
      )}
    />


                  {/* )}
                  {tasks.error ? tasks.error : null} */}
               </div>
    )
}