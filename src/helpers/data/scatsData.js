import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;
// console.error('baseUrl', baseUrl);

const getScatsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/scats.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbScats = response.data;

      const scats = [];
      if (fbScats) {
        Object.keys(fbScats).forEach((fbId) => {
          fbScats[fbId].id = fbId;
          scats.push(fbScats[fbId]);
        });
      }
      resolve(scats);
    })
    .catch((err) => reject(err));
});

export default { getScatsByUid };