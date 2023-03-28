import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Video from "../../components/video/Video";
import { getChannelDetails } from "../../redux/actions/channel.action";
import { getVideosByChannel } from "../../redux/actions/videos.action";
import "./_channelScreen.scss";
import numeral from "numeral";

const ChannelScreen = () => {
  const dispatch = useDispatch();

  const { channelId } = useParams();

  useEffect(() => {
    dispatch(getVideosByChannel(channelId));
    dispatch(getChannelDetails(channelId))
  }, [dispatch, channelId]);

  const { video, loading } = useSelector((state) => state.channelVideos);
  const { snippet, statistics } = useSelector((state) => state.channelDetails.channel);

  return (
    <>
        <div className="px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader">
            <div className="d-flex align-items-center">
                <img src={snippet?.thumbnails?.default?.url } alt="" />
                <div className="ms-3 channelHeader__details">
                    <h3>{snippet?.title}</h3>
                    <span>
                        {numeral(statistics?.subscriberCount).format('0.a')}{' '}Subscribers
                    </span>
                </div>
            </div>
            <button>Subscribe</button>
        </div>
      <Container>
        <Row className="mt-2">
          {!loading ? (
            video?.map((video) => (
              <Col md={3} lg={3}>
                <Video video={video} channelScreen />
              </Col>
            ))
          ) : (
            <h5>Loading...</h5>
          )}
        </Row>
      </Container>
    </>
  );
};

export default ChannelScreen;
