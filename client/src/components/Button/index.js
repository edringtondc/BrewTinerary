import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';


class Checkbox extends Component {
    state = {
        cSelected: []
    }
    render() {
        return (
            <>
                <h5>Checkbox Buttons</h5>
                <ButtonGroup>
                    <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
            </>
        )
    }
}

export default Checkbox


