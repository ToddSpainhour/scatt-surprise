import React from 'react';

import './SingleScat.scss';
import scatsData from '../../../helpers/data/scatsData';

class SingleScat extends React.Component {
  state = {
    scat: [],
  }

  componentDidMount() {
    const { scatId } = this.props.match.params;
    scatsData.getSingleScat(scatId)
      .then((response) => this.setState({ scat: response.data }))
      .catch((err) => console.error('unable to get single scat', err));
  }

  removeScat = () => {
    const { scatId } = this.props.match.params;
    scatsData.deleteScat(scatId)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('cannot delete scat', err));
  }

  render() {
    const { scat } = this.state;
    return (
      <div className="SingleScat" style={{ backgroundColor: scat.color }}>
        <h3>{scat.location}</h3>
    <p>Shape: {scat.shape}</p>
    <p>Size: {scat.size}</p>
    <p>Temperature: {scat.temperature}</p>
    <p>Viscosity: {scat.viscosity}</p>
    <p>Location: {scat.location}</p>
    <p>Notes: {scat.notes}</p>
    <p>Was it fulfilling? {scat.wasFulfilling ? 'Yes' : 'No'}</p>
    <button class="btn btn-danger" onClick={this.removeScat}><i class="far fa-times-circle"></i></button>
      </div>
    );
  }
}

export default SingleScat;
