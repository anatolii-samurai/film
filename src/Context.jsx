import { createContext,useReducer,useEffect } from "react";
import axios from 'axios'
export const userKeyContext = createContext('eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmJlZDMzMGRmY2FkMmQ3Zjk4NDY4MTBmNDBiZGFkYSIsInN1YiI6IjY1Y2RlZjVhZDdkY2QyMDE3YzFlZGQ3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RKdDDbycHzyarq7TlYOkqna6C4TjGmJgQZiovGNkfd8')

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function FilterProvider({children}){
    const initialState = {
        loading:true,
        error:'',
        post:[]
       }
    const[tasks,dispatch] = useReducer(checkReducer,initialState);
    const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmJlZDMzMGRmY2FkMmQ3Zjk4NDY4MTBmNDBiZGFkYSIsInN1YiI6IjY1Y2RlZjVhZDdkY2QyMDE3YzFlZGQ3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RKdDDbycHzyarq7TlYOkqna6C4TjGmJgQZiovGNkfd8'
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      };
    useEffect(()=>{
      axios
      .get('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
      .then(response =>{
        dispatch({type:"FETCH_SUCCESS",payload:response.data.genres})
      })
      .catch(error => {
        dispatch({type:'FETCH_ERROR'})
      } );
      },[])

      
       return(
        <TasksContext.Provider value={tasks}>
                <TasksDispatchContext.Provider value={dispatch}>
                    {children}
                </TasksDispatchContext.Provider>
        </TasksContext.Provider>
       
       )




    function checkReducer(states,action){ 
      switch(action.type){
        case 'FETCH_SUCCESS':
          return{
            loading:false,
            post:action.payload,
            error:''
          }
          case 'FETCH_ERROR':
            return{
              loading:false,
              post:[],
              error:'Something wrong'
            }
        case 'reset' : 
         { return {...states,post: states.post.map(t => ({ ...t, checked:false}))}}
        case 'change' :
          {return {...states,genres: states.genres.map(t => {
            if (t.name === action.payload.name) {
              return {...t, checked:action.payload.checked}
            }else {
              return t;
            }
          })}
            
           }
            default:
              return states
        }
      } 
}