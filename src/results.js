import React, {Component} from 'react';

export class Results extends Component {
    render() {
        return (
            <div>
                <ul  style={{listStyle: 'none'}}>
                    {this.props.pizzas.map((pizza, i) => <li key={i}>{this.props.listPrefix} {pizza}</li>)}
                </ul>
            </div>
        );
    }
}

Results.defaultProps = {
    pizzas: [],
    listPrefix: ''
};
