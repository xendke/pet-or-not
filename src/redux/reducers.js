/* 
 *  reducers
 */
import { SUBMIT_FORM, RECEIVE_RESULTS } from './actions';

const PetOrNotApp = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_FORM:
            return {
                ...state,
                fetching: true,
                imgUrl: action.imgUrl,
                imgData: action.imgData
            }
        case RECEIVE_RESULTS:
            return {
                ...state,
                fetching: false,
                results: action.results,
                imgUrl: "",
                imgData: ""
            }

    }
}

export default PetOrNotApp;