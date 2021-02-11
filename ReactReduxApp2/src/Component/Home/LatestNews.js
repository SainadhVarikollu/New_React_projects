import React from 'react';
import {Link} from 'react-router-dom'

const Latest=(props)=>{
   
      const renderLatest=({latestArray})=>{
          if(latestArray){
              return latestArray.map((data)=>{

                return(
                    <Link to={`/details/${data.id}`} className="item" key={data.id}>
                    <div className="image_cover"
                     
                     style={{background:`url('/images/articles/${data.img}')`}}
                    >
                        <div className="description">
                         <span>{data.category}</span>
                         <div>{data.title}</div>

                        </div>

                    </div>

                    </Link>
                ) 

              })
          }

      }
    return(
        <div className='home-latest'>
            <h1>Latest News</h1>
            {renderLatest(props)}
        </div>
    )
}
export default Latest;