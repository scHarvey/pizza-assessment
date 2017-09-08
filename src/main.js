import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

import {Loading} from './loading';
import {Results} from './results';
import {Filter} from './filter';
import {Sort} from './sort';

export class Main extends Component {
/* having issues with proptype definitions in your version of React. Everything is working without defining them so I'm just leaving these here as a note.
I'm more used to the 15.5+ implementation where prop-types is its own component to import, but this SHOULD work in 15.3.2
    static propTypes = {
        loading: React.PropTypes.bool.isRequired
    }
*/
    constructor() {
        super();
        this.state = {
            pizzas: [],
            loading: true
        };
    }


    componentWillMount() {
        console.log('mounting');
        this.loadPizzas();

    }

    filterPizzas(){

    }

    sortPizzas(){

    }


    loadPizzas() {
        console.log('fetching');
        fetch(`/pizza.json`)
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad response");
            }
            return response.json();
        })
        .then((response) => {
            const pizzas = new Array(...response.pizzas);
            this.setState({ pizzas, loading: false });
        })
        .catch(err => console.error(err));

    }

    render() {

        if (this.state.loading) {
            return (
                <Loading message="Stuff..." />
            );
        }

        return (
            <div>
                <Filter callback={this.filterPizzas.bind(this)} /> <Sort callback={this.sortPizzas.bind(this)} />
                <Results pizzas={this.state.pizzas} />
            </div>
        );
    }
}

Main.defaultProps = {
    loading: true
};
