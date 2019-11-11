import { FETCH_VIDEOS } from '../constants/actionTypes';
import firebase from '../config/firebase-config';

export const fetchVideos = () => async dispatch => {
    let videos = [];
    const firestore = firebase.firestore();

    try {
        const querySnapshot = await firestore.collection('videos').limit(50).get();
        await querySnapshot.forEach(doc => {
            videos.push(doc.data());
        });

        dispatch({ type: FETCH_VIDEOS, payload: {videos }});
    } catch (error) {
        console.log(error);
    }
}