import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import HelmetCustom from "../../components/HelmetCustom";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import {
  getVideosById,
  getRelatedVideos,
} from "../../redux/actions/videos.action";
import "./_watchScreen.scss";


const WatchScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosById(id));
    dispatch(getRelatedVideos(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideo);

  const { videos, loading: relatedVideosLoading } = useSelector(
    (state) => state.relatedVideo
  );

  return (
    <Row>
    <HelmetCustom title= {video?.snippet?.title}/>
      
      <Col lg={7}>
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>

        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h6>Loading...</h6>
        )}

        <Comments
          videoId={id}
          totalComments={video?.statistics?.commentCount}
        />
      </Col>
      <Col lg={5}>
        {!relatedVideosLoading ?
          videos?.filter(video=>video.snippet )
          .map((video) => (
            <VideoHorizontal video={video} key={video.id.videoId} />
          ))  : <h6>Loading...</h6> }
      </Col>
    </Row>
  );
};

export default WatchScreen;
