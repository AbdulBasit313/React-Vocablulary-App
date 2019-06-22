import React from 'react'

const Alert = ({ alert }) => {
   return (
      alert !== null &&
      <div style={{ backgroundColor: 'rgb(255, 246, 143)', color: 'black', fontWeight: 'bold', padding: 10, marginTop: 10 }}>
         {alert}
      </div>
   )
}


export default Alert
