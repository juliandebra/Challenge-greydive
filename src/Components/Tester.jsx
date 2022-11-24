import React, { useEffect, useState } from 'react'
import db from '../db.json'
import { useParams } from 'react-router-dom';
import Tarea from './Tarea';
import Video from './Video';

const Tester = () => {
    const params = useParams()
    const [item, setItem] = useState({})
    let index = db.findIndex(item => item.cliente === params.testeador)

    useEffect(() => {
      let route = db.find(item => item.cliente === params.testeador)
      setItem(route)
    }, [params])
    
    let sentences = item.transcripcion?.split('<br>')
    
  return (
    <>
        <h1>{item.cliente}</h1>
        <h2>Test: Test de usabilidad en el sitio web</h2>
        <h3>Testeador {index+1}</h3>

        <Video linkVideo={item.linkVideo}/>

        <h3>Transcripción</h3>
        <div className='transcripcion'>
          {sentences?.map(sentence => <p key={sentence}>{sentence}</p> )}
        </div>

        <h3>Tareas</h3>
        <h4>Escenario: {item.escenario}</h4>
        <hr/>
        {item.preguntas?.map(( item, index) => <Tarea key={item.texto} item={item} index={index}/>)} 
    </>
  )
}

export default Tester
