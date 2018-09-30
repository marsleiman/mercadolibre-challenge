import { SEARCH_SUCCESS, SEARCH_CLEAR } from '../components/redux/actions';
import { PRODUCT_SUCCESS, PRODUCT_CLEAR } from '../components/redux/actionsProduct';

import initialStore from './initialStore';
export const NOTYPEDFINED = 'TYPE OF ACTION NTO DEFINED';

export const rootReducer = (state = initialStore, action) => {
    switch(action.type) {
        case SEARCH_SUCCESS:
            return Object.assign({}, state, {
                products : action.data.items, 
                categories : action.data.categories
            });
        case SEARCH_CLEAR:
            return Object.assign({}, state, {
                products : [],
                categories : []
            });
        case PRODUCT_SUCCESS:
            return Object.assign({}, state, {product : action.data.item});
        case PRODUCT_CLEAR:
            return Object.assign({}, state, {product : ""});
        default:
            return state;
    }
}

export default rootReducer;
