import {legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
import { channelVideosReducer, homeVideosReducer, relatedVideoReducer, searchedVideosReducer, selectedVideoReducer,subscriptionsChannelReducer } from "./reducers/videos.reducer";
import {channelDetailsReducer} from './reducers/channel.reducer'
import {commentListReducer} from './reducers/comments.reducer'


const rootReducer  = combineReducers(
    {
        auth: authReducer,
        homeVideos : homeVideosReducer,
        selectedVideo: selectedVideoReducer,
        channelDetails: channelDetailsReducer,
        commentList:commentListReducer,
        relatedVideo: relatedVideoReducer,
        searchedVideos:searchedVideosReducer,
        subscriptionsChannel:subscriptionsChannelReducer,
        channelVideos:channelVideosReducer
    }
)

const store = createStore(
    rootReducer,
    {},                                                                    // InitialState
    composeWithDevTools(applyMiddleware(thunk)));                          // To use devtools in browser

export default store;