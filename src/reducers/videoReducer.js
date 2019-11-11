import { createReducer } from './reducerUtil';
import { FETCH_VIDEOS } from '../constants/actionTypes';
// import { actionTypes } from 'redux-firestore';

const initialState = [];

export const fetchVideos = (state, payload) => {
    return payload.videos
}

export default createReducer(initialState, {
    [FETCH_VIDEOS]: fetchVideos
});

// export const vieosReducer = (state, action) => {
//     switch (action.type) {
//         case actionTypes.FETCH_VIDEOS:
//             return fetchVideos(state, action.payload);
//     }
// }