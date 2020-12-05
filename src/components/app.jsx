import React, { Component } from 'react';

import giphy from 'giphy-api';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'S3nSDoF5y3NEVwp5FN'
    }

    this.search("homer thinking");
  }

  search = (query) => {
    giphy('JBMax2yqMiN5o9TMFnDGPzhqagO5XAAs').search({
      q: "homer",
      rating: 'g',
      function (err, res) {
        console.log(res);
      }
    });
  };

  render() {
    const gifs = [{ id: 'S3nSDoF5y3NEVwp5FN' }, { id: 'cloudJewy8RUlDm5eG' }];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="gJoBh5M8pIxAFKtaV6" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs } />
        </div>
      </div>);
  }
}

export default App;
