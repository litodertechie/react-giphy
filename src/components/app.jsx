import React, { Component  } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  render () {

    const gifs = [
      { id: "RlTFlpwDYWt32oy4Pm"},
      { id: "xT9IgDEI1iZyb2wqo8"}
    ];
    return (
      <div>
        <div className="left-scene ">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
