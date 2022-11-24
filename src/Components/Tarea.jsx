import React from 'react'

const Tarea = ({item, index}) => {
  const texto = item.texto.split('\\n')
  return (
    <>
      <div className='tarea'>
          <h4>Tarea {index+1}:</h4>
          {texto.map(sentence => <h4 key={sentence}>{sentence}</h4>)}
          <p className='tiempo'>Duración de la tarea: {item.tiempo}</p>
      </div>
      <hr/>
    </>
  )
}

export default Tarea
