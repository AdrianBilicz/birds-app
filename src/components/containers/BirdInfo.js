import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class BirdInfo extends Component {
  render() {
    const selectedBird = this.props.birds.selectedBird;

    if (selectedBird) {
      const { spiece, picture, sound, desc, map, shape } = selectedBird;
      return (
        <header className="major">
          <span className="image avatar">
            <img style={{ height: 200, width: 200 }} src={picture} alt="" />
          </span>
          <h2>{spiece}</h2>
          <audio src={sound} controls>
            <source src={sound} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <br />
          <p>{desc}</p>
          <div className="map">
            <img src={map} alt="" />
          </div>
          <div
            style={{ position: "absolute", top: "10%", right: "20%" }}
            className="shape"
          >
            <img src={shape} alt="" />
          </div>
        </header>
      );
    }
    return <p>Loading..</p>;
  }
}

const stateToProps = state => ({
  birds: state.birds
});

export default connect(stateToProps)(BirdInfo);
