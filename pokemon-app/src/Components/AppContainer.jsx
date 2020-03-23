import React, { Component } from 'react';
import { Fragment } from 'react';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Pokemon: []
        };
    };

    componentDidMount() {
        this.loadData();
    };

    loadData = async () => {
        const pokereference = await fetch('https://pokeapi.co/api/v2/pokemon?limit=900')
        let returnInfo = await pokereference.json();
        // console log your returned json - returnInfo is an object not an array
        this.setState({ Pokemon: returnInfo });
        console.log(this.state.Pokemon);
    };

    render() {
        return (
            <Fragment>
                <h1>Pokemon Reference</h1>
                {this.state.Pokemon.map((poke)=>{
                    return(
                        <div>
                            <h1>{}</h1>
                        </div>
                    )
                })
            //  } you were missing a curly here - I put it back to test your code
            </Fragment> // the error on this line literally says "curly brace expected"
        )
    };
};

export default AppContainer;