import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import {Loading} from './loading';
import {Filter} from './filter';
import {Sort} from './sort';
import {Results} from './results';

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            pizzas: [],
            loading: true
        };
    }

    render() {
        if (this.props.loading) {
            return <Loading message="Loading..." />;
        }

        return (
            <div>
                <Filter /> <Sort />
                <Results pizzas={this.state.pizzas} />
            </div>
        );
    }
}
