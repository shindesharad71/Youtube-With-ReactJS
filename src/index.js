import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAiLbM1yG9mHGm_gQq9Fgmy6Bpx2973lHE';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         };

        this.videoSearch('Game of Thrones');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return ( 
        <div>
            <div className="row justify-content-center">
                <SearchBar onSearchTermChange={videoSearch}/>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <div className="col-md-4">
                    <VideoList 
                        videos={this.state.videos} 
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    />
                </div>
            </div>
        </div>
        );
    }
}

ReactDOM.render( < App / > , document.querySelector('.container-fluid'))