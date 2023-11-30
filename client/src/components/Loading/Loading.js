import React from 'react'
import './loading.css'
const Loading = () => {
  return (
    <div style={{width:"100%",height:"90vh",overflow:'hidden',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div class="loader"></div>
    </div>
  )
}
export default Loading