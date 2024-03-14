import { useContext,useState } from "react";
import { TasksContext,TasksDispatchContext } from "./Context";
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export function GenreList(){
    const tasks= useContext(TasksContext)
    const dispatch = useContext(TasksDispatchContext)
    function handleChange(e){debugger
      dispatch({
        type:'change',
        checked:e.target.checked
      })
    }
    
    return(
        <div className='items__genres'>
            
    <Autocomplete
      multiple
      
      id="checkboxes-tags-demo"
      onChange={handleChange}
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
    
          />
          {option.name}
        </li>
      )}
      style={{ width: 296,height:24 }}
      renderInput={(option) => (
        <TextField {...option}  label="Жанры"  placeholder="Favorites" />
      )}
    />
               </div>
    )
}