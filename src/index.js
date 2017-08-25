import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAiLbM1yG9mHGm_gQq9Fgmy6Bpx2973lHE';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'Game of Thrones' }, (videos) => {
            this.setState({ videos: videos });
        });
    }

    render() {
        return ( <
            div >
            <
            SearchBar / >
            <
            /div>
        );
    }
}

ReactDOM.render( < App / > , document.querySelector('.container'))