import React from 'react';
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

          <div class="form-group col-6 offset-3">
            <label htmlFor="color">Color</label>
            <input
            type="text"
            class="form-control"
            id="scat-color"
            value={scatColor}
            onChange={this.colorChange}
            />
          </div>

          <div class="form-group col-6 offset-3">
            <label htmlFor="shape">Shape</label>
            <input
            type="text"
            class="form-control"
            id="scat-shape"
            value={scatShape}
            onChange={this.shapeChange}
            />
          </div>

          <div class="form-group col-6 offset-3">
            <label htmlFor="size">Size</label>
            <input
            type="text"
            class="form-control"
            id="scat-size"
            value={scatSize}
            onChange={this.sizeChange}
            />
          </div>

          <div class="form-group col-6 offset-3">
            <label htmlFor="temperature">Temperature</label>
            <input
            type="text"
            class="form-control"
            id="scat-temperature"
            value={scatTemperature}
            onChange={this.temperatureChange}
            />
          </div>

          <div class="form-group col-6 offset-3">
            <label htmlFor="viscosity">Viscosity</label>
            <input
            type="text"
            class="form-control"
            id="scat-viscosity"
            value={scatViscosity}
            onChange={this.viscosityChange}
            />
          </div>

          <div class="form-group col-6 offset-3">
            <label htmlFor="location">Location</label>
            <input
            type="text"
            class="form-control"
            id="scat-location"
            value={scatLocation}
            onChange={this.locationChange}
            />
          </div>

          <div class="form-group col-6 offset-3">
            <label htmlFor="notes">Notes</label>
            <input
            type="text"
            class="form-control"
            id="scat-notes"
            value={scatNotes}
            onChange={this.notesChange}
            />
          </div>

          <div class="form-group form-check">
            <input
            type="checkbox"
            class="form-check-input"
            id="scat-wasFulfilling"
            checked={scatWasFulfilling}
            onChange={this.wasFulfillingChange}
            />
            <label htmlFor="scat-wasFulfilling">Was it Fulfilling?</label>
          </div>

          {/* <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div> */}

          <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    );
  }
}

export default NewScat;
