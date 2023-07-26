import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'
import * as constants from './action_constants';
import * as actions from './actions';

const defaultState = {
    quote: '',
    author: '',
    backgroundColor: constants.C1,
    isFetching: false,
}
const messageReducer = (state = defaultState, action) =>
{
    switch (action.type)
    {
        case constants.FETCHING: return ({
            quote: state.quote,
            author: state.author,
            backgroundColor: state.backgroundColor,
            isFetching: true,
        });
        case constants.FETCHED: return  ({
            quote: action.quote,
            author: action.author,
            backgroundColor: state.backgroundColor === constants.C1 ? constants.C2 : constants.C1,
            isFetching: false,
        })
        default: return state;
    }
}


const store = createStore(messageReducer,applyMiddleware(thunk));

const passStateToProps = (state) => ({
    quote: state.quote,
    author: state.author,
    backgroundColor: state.backgroundColor,
    isFetching: state.isFetching,
});
const passActionsToProps = (dispatch) => ({
    gettingQuote() {
        dispatch(actions.fetchingQuote());
    },
    gotQuote(quote) {
        dispatch(actions.fetchedQuote(quote));
    }
});

export {store, passStateToProps, passActionsToProps};

