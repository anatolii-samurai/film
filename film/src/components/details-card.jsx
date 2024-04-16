import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailsMovie } from "./api";
import { Box, Table, TableContainer, TableHead } from "@mui/material";





 export default function DetailsCard(){
    const {id} = useParams
    const{detail,setDetail} = useState([])

  useEffect(()=>{
    async function fetchData() {
        try {
         
          const details = await getDetailsMovie(id) 
          setDetail(details)
        } catch (e) {
          console.error(e)
        }
      }
  
      fetchData();
    },[]);
 

    return(
        <Box>
           
                     <TableContainer>
                     <Table sx={{minWidth: 500}} aria-label="simple table">
                         <h1>{id}</h1>
                         
     
                     </Table>
     
                 </TableContainer>
          

          
           
            
        </Box>
    )

}