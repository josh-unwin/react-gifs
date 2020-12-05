import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const giphyURL = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`;
    return (<img src={giphyURL} alt="" className="gif" />);
  }
}

export default Gif;
