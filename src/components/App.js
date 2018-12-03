import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID 0258b7ab9995e8cdc2b1d742a3648041b05d4c08e72e9f74e93ef3a5a6868aea'
      }
    });
  }

  render() {
    return (
      <div className="ui container style={{marginTop: '10 px'}}">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
