import React from 'react'
import loading from './loading.gif'

const Spinner=()=> {
  
    return (
    // <div className="text-center">
    //     <div className="spinner-border" role="status">
    //     <span className="visually-hidden">Loading...</span>
    //     </div>
    // </div> 
    <div className="text-center">
                <img className="my-3" src={loading} alt="loading" />
            </div>
    )
  }


export default Spinner
