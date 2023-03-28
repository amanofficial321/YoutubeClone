import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './_subscriptionsScreen.scss'
import { getSubscribedChannels } from '../../redux/actions/videos.action';
import { Container } from 'react-bootstrap';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';



const SubscriptionsScreen = () => {


    const dispatch= useDispatch();

    const {loading, video} = useSelector(state=>state.subscriptionsChannel); 

    useEffect( ()=>{
        dispatch(getSubscribedChannels())
    },[dispatch] )

  return (
    <Container fluid>
      {
        !loading ? video?.map(video=><VideoHorizontal video={video} key={video.id} subScreen/>):<h6>Loading...</h6>
      }
    </Container>
  )
}

export default SubscriptionsScreen