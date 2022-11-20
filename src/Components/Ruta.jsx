import React from 'react'
import { Player } from 'video-react';
import ReactPlayer from 'react-player';
import Tarea from './Tarea';

const Ruta = ({item, index}) => {
    
  return (
    <>
        <h1>{item.cliente}</h1>
        <h1>Test: Test de usabilidad en el sitio web</h1> 
        <h2>Testeador {index+1}</h2>
        <Player fluid={false} width={1300} height={1100} src={item.linkVideo} playsInline={false}/>
        <p id='text'>{item.transcripcion}</p>
        <h2>Tareas</h2>
        <h3>Escenario: {item.escenario}</h3>
        <hr/>
        {item.preguntas.map((item, index) => <Tarea key={item.texto} item={item} index={index}/>)}
        {/* <ReactPlayer url={item.linkVideo} /> */}
    </>
  )
}

export default Ruta
