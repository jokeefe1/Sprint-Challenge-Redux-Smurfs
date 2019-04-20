import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddSmurf } from '../actions/index';

class AddSmurf extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddSmurf(this.state);
        this.setState({ name: '', age: '', height: '' });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"
                    />
                    <input
                        type="text"
                        name="height"
                        value={this.state.height}
                        onChange={this.handleChange}
                        placeholder="Height"
                    />
                    <button type="submit">Add Smurf</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    { handleAddSmurf }
)(AddSmurf);
