import React, {Component} from 'react';

export class Filter extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="Filter..." />
            </form>
        );
    }
}
