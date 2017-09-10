import React, {Component} from 'react';

export class SimpleButton extends Component {

    constructor() {
        super();
    }

    /**
     * @method buttonClick - handles click for our button and then falls through to the callback
     * @param {event} e - the click event, mostly just for completeness sake
     * @param {object} _this - reference to the component itself so that we can access things like props. Would generally use an arrow function, but they don't seem to be working as class methods with this config
     */
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
