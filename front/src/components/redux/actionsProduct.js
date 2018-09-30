export const PRODUCT_PENDING = '[PRODUCT][SHOW] pending';
export const PRODUCT_SUCCESS = '[PRODUCT][SHOW] success';
export const PRODUCT_FAILURE = '[PRODUCT][SHOW] failure';
export const PRODUCT_CLEAR = '[PRODUCT][SHOW] clear';

export const product_pending = (id, dispatch) => {
    fetch('http://localhost:3001/api/items/' + id)
        .then((response) => response.json())
	    .then((data) => {
		    dispatch(product_success(data));
	    })
        .catch((error) => {
            dispatch(product_failure(error));
        });

    return {
        type: PRODUCT_PENDING,
        id
    };
};

export const product_clear = (dispatch) => {
    return {
       type : PRODUCT_CLEAR
    };
};

export const product_success = data => ({
    type: PRODUCT_SUCCESS,
    data
});

export const product_failure = error => ({
    type: PRODUCT_FAILURE,
    error
});
