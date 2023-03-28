import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVideosBySearch } from '../../redux/actions/videos.action'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'


const SearchScreen = () => {

    const {query} = useParams()
    console.log('searchscreen',query)

    const dispatch= useDispatch();

    useEffect( ()=>{
        dispatch(getVideosBySearch(query))
    },[query,dispatch] )

    const {video, loading} = useSelector(state=>state.searchedVideos)

  return (
    <Container>
        {
            !loading? (video.map( video=><VideoHorizontal key={video.id.videoId} video={video} searchScreen />)): (<h6>Loading...</h6>) 
        }
    </Container>
  )
}

export default SearchScreen