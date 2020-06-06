import React from 'react';

import authData from '../../../helpers/data/authData';
import scatData from '../../../helpers/data/scatsData';
import ScatCard from '../../shared/ScatCard/ScatCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    scats: [],
  }

getScats = () => {
  // console.error('this is inside your getScats function in Home.js');
  const uid = authData.getUid();
  // console.error('uid', uid);
  scatData.getScatsByUid(uid)
    .then((scats) => this.setState({ scats }))
    .catch((err) => console.error('unable to get scats', err));
}

componentDidMount() {
  this.getScats();
}


render() {
  const { scats } = this.state;
  const buildScatCards = scats.map((scat) => (
    <ScatCard scat={scat}/>
  ));
  return (
    <div className="Home">
      <h3>Home</h3>
        <div className="d-flex flex-wrap">

            {buildScatCards}

        </div>
    </div>
  );
}
}

export default Home;
