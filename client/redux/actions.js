import axios from 'axios';

const getQuestions = (data) => {
    return { type: "GET_QUESTIONS", payload: data }
}
export const fetchQuestions = (url) => (dispatch) => {
    return axios.get(url, {
        headers: {
            Authorization: "488f9d0ac74a80a7806e57b3c64a52451ba6090f",
        },
    })
        .then((result) => {
            dispatch(getQuestions(result.data.results))
            console.log(result.data.results)
        }).catch((err)=>{
            console.log(err)
        })
}
export const loadMore= ()=>{
    return {type: "LOAD_MORE_QUESTIONS"}
}