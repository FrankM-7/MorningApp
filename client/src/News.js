import React, {Component} from 'react'

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            news: "Not yet got"
        };
    }
    callAPI() {
        fetch("/newsAPI")
            .then(res => res.text())
            .then(res => this.setState({
                 news: JSON.parse(res).allArticles[0].url
                }))
            .catch(err => err);
    }
    
    componentDidMount() {
        this.callAPI();
    }


    render() {
        return (
            <div>
                <h1>The news is: {this.state.news}</h1>
            </div>
        );
    }
}