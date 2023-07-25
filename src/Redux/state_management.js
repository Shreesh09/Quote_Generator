import { createStore} from 'redux';
import * as constants from './action_constants';
import * as actions from './actions';
const messageReducer = (state = [], action) =>
{
    switch (action.type)
    {
        case constants.ADD: return (state.concat(action.message));
        default: return state;
    }
}

const store = createStore(messageReducer);

const passStateToProps = (state) => ({messages: state});
const passActionsToProps = (dispatch) => ({submitMessage(message) {
        dispatch(actions.addMessage(message));
    }});

export {store, passStateToProps, passActionsToProps};

