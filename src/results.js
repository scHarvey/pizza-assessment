import React, {Component} from 'react';


export class Results extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.pizzas.map((pizza) => <li>{pizza}</li>)}
                </ul>
            </div>
        );
    }
}

