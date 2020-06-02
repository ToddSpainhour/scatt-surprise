import React from 'react';
import './EditScat.scss';

class EditScat extends React.Component {
  render() {
    const editId = this.props.match.params.scatId;
    return (
      <div className="EditScat">
        <h3>Edit Scat</h3>
        <h4>the scat is is {editId}</h4>
      </div>
    );
  }
}

export default EditScat;
