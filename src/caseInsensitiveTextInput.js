import React, {Component} from 'react';

export class CaseInsensitiveTextInput extends Component {
    constructor() {
        super();
    }

    handleTextInput (e, _this) {
        const textValue = document.querySelector('#CaseInsensitiveTextInput');
        _this.props.callback(textValue.value.toLowerCase());
    }
    render() {
        return (
            <form>
                <input id="CaseInsensitiveTextInput" type="text" placeholder={this.props.placeholder} onKeyUp={(e) => this.handleTextInput(e, this)} />
            </form>
        );
    }
}

CaseInsensitiveTextInput.defaultProps = {
    placeholder: ''
};
