/* 
 *  actions
 * 
 */

export const SUBMIT_FORM = "SUBMIT_FORM";
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

/*
 * Redux State Tree (Pet or Not)
 *   {
 *       hasResult: bool - whether or not form was filed.
 *       isFetching: waiting for clarifai,
 *       imgUrl: String - used by MainResultCard,
 *       concepts: List of Strings - used by ConceptList
 *       //maybe:
 *       url bieng typed,
 *       img file.
 *   }
 */

export function submitForm(imgUrl, imgData) {
    return {
        type: SUBMIT_FORM,
        imgUrl,
        imgData
    }
} 
export function receiveResults(results) {
    return {
        type: RECEIVE_RESULTS,
        results
    }
}