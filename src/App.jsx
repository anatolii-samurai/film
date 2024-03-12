import React from 'react';
import { Button,Icon,SvgIcon } from '@mui/material';
import { Form } from './Form';
import { Select } from './Select';
import { FilterProvider } from './Context';
import { GenreList } from './Genre-list';
import './App.css';
import { CloseFilter } from './Buttons';

 
function App() {
      return(
     <FilterProvider>
          <div className='container'>
      <div className="header">
        <h1 className='title__films'>Films</h1>
        {/* <PermIdentityRoundedIcon  className="btn__enter" sx={{color:'white'}}  ></PermIdentityRoundedIcon> */}
        <Icon>
          <SvgIcon>
          <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="white" />
          </SvgIcon>
        </Icon>
      </div>
      <hr />
      <div className="main">
          <div className="filter">
              <div className="title__filter">
                Фильтры
              <CloseFilter/>  
              </div>
              <Select title={'Сортировать по:'} 
              id={'select__filter'} 
              option={<option value={'pop'}>Popularity</option>}
              />
              <Select title={'Год релиза:'} id={'years__filter'} option={<option value={'2022'}>2022</option>}/>
              <Form>
               <GenreList/>
                </Form>
              <div className="pagination">
                
              </div>
            </div>
         </div>
      </div>
     </FilterProvider>
        
    
      )
}




export default App;
