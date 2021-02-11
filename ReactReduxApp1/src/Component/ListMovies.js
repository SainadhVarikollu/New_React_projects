import React from 'react';
const ListMovies=(props)=>{

   const renderView=({Lists})=>{
       if(Lists){
           return Lists.map((item)=>{
               return(
               <div key={item.id}>{item.name}</div>
               )
           })
       }
   }







    return(
        <div>
            {renderView(props)}
        </div>
    )
}



export default ListMovies;
