const ADD = 'cart/ADD';
const DROP = 'cart/DROP';
const REMOVE = 'cart/REMOVE';
const PURCHASE = 'cart/PURCHASE';

export const addCart = (produceId) => {
    return {
      type: ADD,
      id: produceId
    };
};

export const dropCart = (produceId) => {
    return {
      type: DROP,
      id: produceId
    };
};

export const removeCart = (produceId) => {
    return {
      type: REMOVE,
      id: produceId
    };
};

export const purchaseCart = () => {
    return {
      type: PURCHASE,
    };
};

export default function cartReducer(state = {}, action) {

    let newState = {
        ...state,
    };
    const itemKey = action.id;

    switch (action.type) {
        case ADD:
            if (newState[itemKey]){
                newState[itemKey].count++;
            }
            else{
                newState[itemKey] = { id: action.id, count: 1 }
            }

            return newState;
        case DROP:
            if (newState[itemKey].count === 1){
                delete newState[itemKey];
            }
            else{
                newState[itemKey].count--;
            }

            return newState;
        case REMOVE:
            delete newState[itemKey];

            return newState;
        case PURCHASE:
            return {};
        default:
            return state;
    }
};
