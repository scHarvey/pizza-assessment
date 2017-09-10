import React, {Component} from 'react';

export class SimpleButton extends Component {

    constructor() {
        super();
    }

    buttonClick(e, _this) {
        _this.props.callback(e);
    }

    render() {
        return (
            <button onClick={(e) => this.buttonClick(e, this)}>{this.props.buttonText}</button>
        );
    }
}

SimpleButton.defaultProps = {
    buttonText: '  '
};
