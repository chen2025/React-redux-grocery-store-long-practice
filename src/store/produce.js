import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';
const LIKE = 'produce/LIKE'

export const populateProduce = () => {
    return {
      type: POPULATE,
      produce: produceData
    };
};
export const likeProduce = (produceId) => {
  return {
    type: LIKE,
    id: produceId
  };
};

export const getAllProduce = (state) => Object.values(state.produce);

export default function produceReducer(state = {}, action) {
  let newState = {};

  switch (action.type) {
      case POPULATE:
        action.produce.forEach(produce => {
          newState[produce.id] = produce;
        });

        return newState;
      case LIKE:
        newState = {...state};
        newState[action.id]['liked'] = !newState[action.id]['liked'];

        return newState;
      default:
          return state;
  }
};
