import { CHANNEL_VIDEOS_FAIL, CHANNEL_VIDEOS_REQUEST, CHANNEL_VIDEOS_SUCCESS, HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCESS, RELATED_VIDEO_FAIL, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS, SEARCHED_VIDEO_FAIL, SEARCHED_VIDEO_REQUEST, SEARCHED_VIDEO_SUCCESS, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS, SUBSCRIPTIONS_CHANNEL_FAIL, SUBSCRIPTIONS_CHANNEL_REQUEST, SUBSCRIPTIONS_CHANNEL_SUCCESS } from "../actionType"

const initialState ={
    videos:[],                                        
    loading:false,
    nextPageToken:null,
    activeCategory: 'All'
}
export const homeVideosReducer = ( state=initialState, action )=>{

    const {type, payload}= action                            //Destructuring data from action

    switch(type){

        case HOME_VIDEOS_REQUEST: return {                   //While requesting, loading=true to show loader on screen
            ...state,
            loading:true,
      
        }
        case HOME_VIDEOS_SUCESS: return {                   //If active category = payload category then we concatenate payload vidos
            ...state,                                       //to prev videos otherwise if user changed categories we will show only 
            videos:                                         //new category videos
                state.activeCategory === payload.category?[...state.videos,...payload.videos]: payload.videos ,
            loading: false,
            nextPageToken: payload.nextPageToken,
            activeCategory: payload.category
        }
        case HOME_VIDEOS_FAIL: return {
            ...state,
            loading:false,
            error: payload
        }
        
        default:
            return state

    }

}


export const selectedVideoReducer = (state={
    loading: true,
    video:null
}, action) =>{

    const {payload, type} = action;

    switch(type){

        case SELECTED_VIDEO_REQUEST:
            return {
                ...state,
                loading:true
            }
        case SELECTED_VIDEO_SUCCESS:
            return{
                ...state,
                video: payload,
                loading: false
            }   
        case SELECTED_VIDEO_FAIL:
            return{
                ...state,
                loading:false,
                video: null,
                error: payload
            }   
        default: return state      
    }

}


export const relatedVideoReducer = (state={
    loading: true,
    videos:null
}, action) =>{

    const {payload, type} = action;

    switch(type){

        case RELATED_VIDEO_REQUEST:
            return {
                ...state,
                loading:true
            }
        case RELATED_VIDEO_SUCCESS:
            return{
                ...state,
                videos: payload,
                loading: false
            }   
        case RELATED_VIDEO_FAIL:
            return{
                ...state,
                loading:false,
             
                error: payload
            }   
        default: return state      
    }

}

export const searchedVideosReducer = (state={
    loading: true,
    video:[]
}, action) =>{

    const {payload, type} = action;

    switch(type){

        case SEARCHED_VIDEO_REQUEST:
            return {
                ...state,
                loading:true
            }
        case SEARCHED_VIDEO_SUCCESS:
            return{
                ...state,
                video: payload,
                loading: false
            }   
        case SEARCHED_VIDEO_FAIL:
            return{
                ...state,
                loading:false,
                error: payload
            }   
        default: return state      
    }

}

export const subscriptionsChannelReducer = (state={
    loading: true,
    video:[]
}, action) =>{

    const {payload, type} = action;

    switch(type){

        case SUBSCRIPTIONS_CHANNEL_REQUEST:
            return {
                ...state,
                loading:true
            }
        case SUBSCRIPTIONS_CHANNEL_SUCCESS:
            return{
                ...state,
                video: payload,
                loading: false
            }   
        case SUBSCRIPTIONS_CHANNEL_FAIL:
            return{
                ...state,
                loading:false,
                error: payload
            }   
        default: return state      
    }

}

export const channelVideosReducer = (state={
    loading: true,
    video:[]
}, action) =>{

    const {payload, type} = action;

    switch(type){

        case CHANNEL_VIDEOS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case CHANNEL_VIDEOS_SUCCESS:
            return{
                ...state,
                video: payload,
                loading: false
            }   
        case CHANNEL_VIDEOS_FAIL:
            return{
                ...state,
                loading:false,
                error: payload
            }   
        default: return state      
    }

}