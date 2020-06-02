import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  editClickEvent = (e) => {
    e.preventDefault();
    const scatId = 'monkebutt12345';
    this.props.history.push(`/edit/${scatId}`);
  }

  render() {
    return (
      <div className="Home">
        <h3>Home</h3>
        <button className="btn btn-dark" onClick={this.editClickEvent}>Edit a Thing</button>
        <Link to='/scats/234239478'>View Single</Link>
        <Link to='/new/73647'>New Scat</Link>
      </div>
    );
  }
}

export default Home;
