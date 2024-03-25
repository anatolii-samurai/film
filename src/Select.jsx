
export const Select = ({title,id,option}) =>{
    return(
        <label className='sort__filter'>
              {title}
              <select name="name" id={id} autoComplete='on'>
                {option}
                
              </select>
        </label>
    )
}
