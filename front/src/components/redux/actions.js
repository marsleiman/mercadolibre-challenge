export const SEARCH_PENDING = '[PRODUCT][SEARCH] pending';
export const SEARCH_SUCCESS = '[PRODUCT][SEARCH] success';
export const SEARCH_FAILURE = '[PRODUCT][SEARCH] failure';
export const SEARCH_CLEAR = '[PRODUCT][SEARCH] clear';

export const search_pending = (query, dispatch) => {
		fetch(`http://localhost:3001/api/items/?q=${query}`)
        .then((response) => response.json())
        .then((data) => {
            dispatch(search_success(data));
        })
        .catch((error) => {
            dispatch(search_failure(error));
        });

    return {
    	type: SEARCH_PENDING,
    	query
    };
};

export const search_clear = (dispatch) => {
	return {
		type : SEARCH_CLEAR
	};
};

export const search_success = data => ({
	type: SEARCH_SUCCESS,
	data
});

export const search_failure = error => ({
	type: SEARCH_FAILURE,
	error
});
