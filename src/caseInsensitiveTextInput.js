import React, {Component} from 'react';

export class CaseInsensitiveTextInput extends Component {
    constructor() {
        super();
    }
    handleTextInput(e) {
        this.props.callback(e);
    }
    render() {
        return (
            <form>
                <input type="text" placeholder={this.props.placeholder} onKeyUp={this.handleTextInput} />
            </form>
        );
    }
}

CaseInsensitiveTextInput.defaultProps = {
    placeholder: ''
};
