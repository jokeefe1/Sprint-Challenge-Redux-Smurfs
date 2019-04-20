import React from 'react'

export default function Smurf(props) {
  return (
    <div>
      <h3>{props.data.name}</h3>
      <p>{props.data.age}</p>
      <p>{props.data.height}</p>
          <button onClick={() => props.handleDeleteSmurf(props.data.id)}>Delete Smurf</button>
    </div>
  )
}
