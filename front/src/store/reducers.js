//import { combineReducers } from 'redux';
import { SEARCH_SUCCESS, SEARCH_CLEAR } from '../components/redux/actions';

export const NOTYPEDFINED = 'TYPE OF ACTION NTO DEFINED';

export const rootReducer = (state = {}, action) => {
    switch(action.type) {
        case SEARCH_SUCCESS:
            let { items, categories } = action.data;
            return {...state, items, categories };
				case SEARCH_CLEAR:
						return {...state, items: [], categories : []};
        default:
            return state;
    }
}

export default rootReducer;
