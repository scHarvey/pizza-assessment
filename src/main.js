import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

import {Loading} from './loading';
import {Results} from './results';
import {TextInput} from './textInput';
import {SimpleButton} from './simplebutton';

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
            filteredPizzas: [],
            loading: true,
            sortAsc: false,
            sortIcon: [
                '⬆️',
                '⬇️'
            ],
            sortIndicator: '↕️'
        };
    }

    /**
    * @method componentWillMount - calls our loader function on component mount
    */
    componentWillMount() {
        this.loadPizzas();

    }

    /**
    * @method filterPizzas - filters our pizza list based on text input. Case Insensitive
    * @param {string} filter - string upon which to filter our pizza list
    */
    filterPizzas(filter) {
        let pizzas = this.state.pizzas;

        this.setState({
            filteredPizzas: pizzas.filter(pizza => pizza.toLowerCase().includes(filter.toLowerCase()))
        });
    }

    /**
    * @method sortPizzas - sorts our pizza list alpha/reverse alpha
    * @param {event} e - event passed back from our sort button, in case we wanted to add some more complex handling
    */
    sortPizzas(e) {
        let pizzas = this.state.filteredPizzas;

        if (this.state.sortAsc) {
            pizzas = pizzas.sort((a,b) => (a < b ? -1 : 1));
        } else {
            pizzas = pizzas.sort((a,b) => (a > b ? -1 : 1));
        }

        this.setState({
            filteredPizzas: pizzas,
            sortAsc: !this.state.sortAsc,
            sortIndicator: this.state.sortIcon[(this.state.sortAsc ? 1 : 0)]
        });
    }

    /**
    * @method loadPizzas - loads are pizzas from the local json file and saves it in state
    */
    loadPizzas() {
        fetch(`/pizza.json`)
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad response");
            }
            return response.json();
        })
        .then((response) => {
            const pizzas = new Array(...response.pizzas);
            this.setState({ pizzas, filteredPizzas: pizzas, loading: false });
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
                <TextInput placeholder='Filter...' callback={this.filterPizzas.bind(this)} /> <SimpleButton callback={this.sortPizzas.bind(this)} buttonText={'Sort ' + this.state.sortIndicator} />
                <Results listPrefix="🍕" pizzas={this.state.filteredPizzas} />
            </div>
        );
    }
}

Main.defaultProps = {
    loading: true
};
