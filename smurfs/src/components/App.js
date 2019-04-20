import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleGetSmurf, handleDeleteSmurf } from '../actions/index';
import './App.css';
import ListSmurfs from './ListSmurfs';
import AddSmurf from './AddSmurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
    componentDidMount = () => {
        this.props.handleGetSmurf();
    };


    render() {
        return (
            <div>
                <AddSmurf />
                <ListSmurfs handleDeleteSmurf={this.props.handleDeleteSmurf}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(
    mapStateToProps,
    { handleGetSmurf, handleDeleteSmurf }
)(App);
