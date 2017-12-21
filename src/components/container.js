import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class ContainerApp extends Component {
    render() {
        return(
            <div>
                <p className="App-intro">
                    Registration
                </p>
                <FormGroup>
                    <ControlLabel> Firstname </ControlLabel>
                    <FormControl />
                </FormGroup>
                <FormGroup>
                    <ControlLabel> Lastname </ControlLabel>
                    <FormControl />
                </FormGroup>
            </div>
        )
    }
}

export default ContainerApp