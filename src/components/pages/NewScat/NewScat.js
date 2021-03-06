import React from 'react';

import authData from '../../../helpers/data/authData';
import scatData from '../../../helpers/data/scatsData';

import './NewScat.scss';

class NewScat extends React.Component {
  state = {
    scatColor: '',
    scatShape: '',
    scatSize: '',
    scatTemperature: 0,
    scatViscosity: '',
    scatWasFulfilling: false,
    scatLocation: '',
    scatNotes: '',
    uid: '',
  }

  colorChange = (e) => {
    e.preventDefault();
    this.setState({ scatColor: e.target.value });
  }

  shapeChange = (e) => {
    e.preventDefault();
    this.setState({ scatShape: e.target.value });
  }

  sizeChange = (e) => {
    e.preventDefault();
    this.setState({ scatSize: e.target.value });
  }

  temperatureChange = (e) => {
    e.preventDefault();
    this.setState({ scatTemperature: e.target.value * 1 });
  }

  viscosityChange = (e) => {
    e.preventDefault();
    this.setState({ scatViscosity: e.target.value });
  }

  locationChange = (e) => {
    e.preventDefault();
    this.setState({ scatLocation: e.target.value });
  }

  notesChange = (e) => {
    e.preventDefault();
    this.setState({ scatNotes: e.target.value });
  }

  wasFulfillingChange = (e) => {
    this.setState({ scatWasFulfilling: e.target.checked });
  }

  saveScat = (e) => {
    e.preventDefault();
    const {
      scatColor,
      scatShape,
      scatSize,
      scatTemperature,
      scatViscosity,
      scatWasFulfilling,
      scatLocation,
      scatNotes,
    } = this.state;
    const newScat = {
      color: scatColor,
      shape: scatShape,
      size: scatSize,
      temperature: scatTemperature,
      viscosity: scatViscosity,
      wasFulfilling: scatWasFulfilling,
      location: scatLocation,
      notes: scatNotes,
      uid: authData.getUid(),
    };
    scatData.postScat(newScat)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to save scat', err));
  }


  render() {
    const {
      scatColor,
      scatShape,
      scatSize,
      scatTemperature,
      scatViscosity,
      scatWasFulfilling,
      scatLocation,
      scatNotes,
    } = this.state;

    return (
      <div className="NewScat col-12">
        <h3>New Scat</h3>
        <form>

          <div className="form-group col-6 offset-3">
            <label htmlFor="color">Color</label>
            <input
            type="text"
            className="form-control"
            id="scat-color"
            value={scatColor}
            onChange={this.colorChange}
            />
          </div>

          <div className="form-group col-6 offset-3">
            <label htmlFor="shape">Shape</label>
            <input
            type="text"
            className="form-control"
            id="scat-shape"
            value={scatShape}
            onChange={this.shapeChange}
            />
          </div>

          <div className="form-group col-6 offset-3">
            <label htmlFor="size">Size</label>
            <input
            type="text"
            className="form-control"
            id="scat-size"
            value={scatSize}
            onChange={this.sizeChange}
            />
          </div>

          <div className="form-group col-6 offset-3">
            <label htmlFor="temperature">Temperature</label>
            <input
            type="text"
            className="form-control"
            id="scat-temperature"
            value={scatTemperature}
            onChange={this.temperatureChange}
            />
          </div>

          <div className="form-group col-6 offset-3">
            <label htmlFor="viscosity">Viscosity</label>
            <input
            type="text"
            className="form-control"
            id="scat-viscosity"
            value={scatViscosity}
            onChange={this.viscosityChange}
            />
          </div>

          <div className="form-group col-6 offset-3">
            <label htmlFor="location">Location</label>
            <input
            type="text"
            className="form-control"
            id="scat-location"
            value={scatLocation}
            onChange={this.locationChange}
            />
          </div>

          <div className="form-group col-6 offset-3">
            <label htmlFor="notes">Notes</label>
            <input
            type="text"
            className="form-control"
            id="scat-notes"
            value={scatNotes}
            onChange={this.notesChange}
            />
          </div>

          <div className="form-group form-check">
            <input
            type="checkbox"
            className="form-check-input"
            id="scat-wasFulfilling"
            checked={scatWasFulfilling}
            onChange={this.wasFulfillingChange}
            />
            <label htmlFor="scat-wasFulfilling">Was it Fulfilling?</label>
          </div>

          {/* <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div> */}

          <button type="submit" className="btn btn-primary" onClick={this.saveScat}>Submit</button>
      </form>
      </div>
    );
  }
}

export default NewScat;
