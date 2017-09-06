import React, {Component} from 'react';

export class Loading extends Component {
/*
    static propTypes = {
        message: React.PropTypes.string.isRequired
    }
*/

    render() {
        return (
            <div>
                {this.props.message}
            </div>
        );
    }
}

Loading.defaultProps = {
    message: "Loading..."
};
