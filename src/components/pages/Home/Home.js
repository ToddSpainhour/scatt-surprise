import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  editClickEvent = (e) => {
    e.preventDefault();
    const scatId = 'scat12345';
    this.props.history.push(`${scatId}`);
  }

  render() {
    return (
      <div className="Home">
        <h3>Home</h3>
        <button className="btn btn-dark" onClick="this.editClickEvent">edit a thing</button>
        <Link to='/scats/234239478'></Link>
        <Link to='/new/73647'></Link>
      </div>
    );
  }
}

export default Home;
