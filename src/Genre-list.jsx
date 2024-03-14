import { useContext,useState,useEffect } from "react";
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
    
    function handleChange(e,value){
      dispatch({
        type:'change_genres',
        genres:value
      })
    }
    // useEffect(()=>{
      
    //   },[tasks.post])
    return(
        <div className='items__genres'>
            
    <Autocomplete
      multiple
      value={tasks.genres}
      id="checkboxes-tags-demo"
      options={tasks.post}
      disableCloseOnSelect
      onChange={handleChange}
      getOptionLabel={(option) => {return option.name}}
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