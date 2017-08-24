import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAiLbM1yG9mHGm_gQq9Fgmy6Bpx2973lHE';

const App = () => {
    return ( <
        div >
        <
        SearchBar / >
        <
        /div>
    );
}

ReactDOM.render( < App / > , document.querySelector('.container'))