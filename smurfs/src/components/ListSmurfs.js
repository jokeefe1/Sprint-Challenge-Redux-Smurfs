import React from 'react'
import { connect } from 'react-redux'
import Smurf from './Smurf'

const ListSmurfs = (props) => {
    const smurfDetails = props.smurfs.map( smurf => <Smurf key={smurf.id} data={smurf} handleDeleteSmurf={props.handleDeleteSmurf}/>)
  return (
    <div>
      {props.smurfs && smurfDetails}
    </div>
  )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(mapStateToProps)(ListSmurfs)
