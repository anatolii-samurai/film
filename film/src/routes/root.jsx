
import { Icon,SvgIcon } from '@mui/material';
import { RangeSlider, SelectCategory } from '/src/components/Select';
import { FilterProvider } from '/src/components/Context';
import { GenreList } from '/src/components/Genre-list';
import { CloseFilter } from '/src/components/Buttons';
import { PaginationFilms } from '/src/components/pagination';
import {FilmCard} from '/src/components/Card';
import { MoviesProvider } from '/src/components/movies-context';
import { Outlet } from 'react-router-dom';

 
export default function App() {
      return(
     <FilterProvider>
            <MoviesProvider>
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
              <div className="main__filter">
              <div className="filter">
                  <div className="title__filter">
                    Фильтры
                  <CloseFilter/>  
                  </div>
                  <SelectCategory/>
                  <RangeSlider id={'years__filter'} />
                
                  <GenreList/>
                  
                  <div className="pagination">
                    <PaginationFilms />
                  </div>
                </div>
            </div>
            <div className="card__field">
              <FilmCard/>
              
            </div>
            
          </div>
            </MoviesProvider>
            
            <Outlet
              
              />
          
     </FilterProvider>
        
    
      )
}