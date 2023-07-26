import * as constans from "./action_constants";

const fetchingQuote = () => ({
    type: constans.FETCHING,
});

const fetchedQuote = (quote) => ({
    type: constans.FETCHED,
    quote: quote.content,
    author: quote.author
})

export {fetchingQuote, fetchedQuote};


