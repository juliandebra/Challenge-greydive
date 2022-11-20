import React from 'react'
import Ruta from '../Components/Ruta'
import db from '../db.json'
const Home = () => {

    console.log(db)

  return (
    <div>
        {db.map((item, index) => <Ruta key={item.idVideo} index={index} item={item}/>)}
    </div>
  )
}

export default Home
