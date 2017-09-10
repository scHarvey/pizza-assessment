import React, {Component} from 'react';


export class Results extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.pizzas.map((pizza, i) => <li key={i}>{pizza}</li>)}
                </ul>
            </div>
        );
    }
}

