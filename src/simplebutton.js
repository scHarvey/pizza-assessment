import React, {Component} from 'react';

export class SimpleButton extends Component {

    constructor() {
        super();
    }

    buttonClick(e) {

        this.props.callback();
    }

    render() {
        return (
            <button onClick={this.buttonClick}>{this.props.buttonText}</button>
        );
    }
}

SimpleButton.defaultProps = {
    buttonText: '  '
};
