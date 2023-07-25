import * as constans from "./action_constants";

const addMessage = (message) => ({
    type: constans.ADD,
    message: message,
});

export {addMessage};


