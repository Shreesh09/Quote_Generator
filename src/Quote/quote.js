import React from "react";
import './quote_style.css';

class Quote extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        await this.getNewQuote();
    }

    getNewQuote = async () => {
        this.props.gettingQuote();
        const response = await fetch("https://api.quotable.io/random");
        const quote = await response.json();
        this.props.gotQuote(quote);
    }


    render() {
        return(
            <div id="body"  style={{backgroundColor: this.props.backgroundColor}}>
            <div id="quote-box">
                <div id="text-box">
                    <p id="text">{this.props.quote}</p>
                    <p id="author">{this.props.author}</p>
                </div>
                <div id="button-box">
                    <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank"><img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"/> </a>
                    <button onClick={!this.props.isFetching?this.getNewQuote:()=>{}} id="new-quote">New Quote</button>
                </div>
            </div>
            </div>
        );
    }
}

export default Quote;