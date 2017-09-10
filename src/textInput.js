import React, {Component} from 'react';

export class TextInput extends Component {
    constructor() {
        super();
    }

    /**
     * @method handleTextInput - handles keyup for our text input and passes the value of the text input back to our callback
     * @param {event} e - the keyup event, incase we wanted to use it at a later time to allow for something like only filtering after a pause in text entry
     * @param {object} _this - reference to the component itself so that we can access things like props. Would generally use an arrow function, but they don't seem to be working as class methods with this config
     */
    handleTextInput (e, _this) {
        const textValue = document.querySelector('#TextInput');
        _this.props.callback(textValue.value);
    }
    render() {
        return (
            <form style={{display: 'inline'}}>
                <input id="TextInput" type="text" placeholder={this.props.placeholder} onKeyUp={(e) => this.handleTextInput(e, this)} />
            </form>
        );
    }
}

TextInput.defaultProps = {
    placeholder: ''
};
