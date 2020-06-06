import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;
// console.error('baseUrl', baseUrl);

const getScatsByUid = (uid) => new Promise((resolve, reject) => {
  // console.error('this is inside your gatScatByUid promise in scatsData');
  axios.get(`${baseUrl}/scats.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbScats = response.data;
      // console.error('this is the response', fbScats);
      // console.error('this is inside your .then  further inside the getScatByUid promise in scatsData');

      const scats = [];
      if (fbScats) {
        Object.keys(fbScats).forEach((fbId) => {
          fbScats[fbId].id = fbId;
        });
      }
      resolve(scats);
    })
    .catch((err) => reject(err));
});

export default { getScatsByUid };
