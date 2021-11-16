import React, {Component} from 'react'

export default class Weather extends Component {
    constructor() {
        super();
        this.state = {
            weather: "Not yet got"
        };
    }
    callAPI() {
        fetch("/testAPI")

            .then(res => res.text())
            .then(res => this.setState({
                 weather: JSON.parse(res).weather
                }))
            .catch(err => err);
    }
    
    componentDidMount() {
        this.callAPI();
    }


    render() {
        return (
            <div>
                <button>Get Weather</button>
                <h1>The weather is: {this.state.weather}</h1>
            </div>
        );
    }
}