import VideoNavList from "../../components/VideoNavList/VideoNavList.jsx";
import VideoDetails from "../../components/VideoDetails/VideoDetails.jsx";
import { apiClient } from "../../utils/brain-flix-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Home() {
  const params = useParams();
  const [firstVideoId, setfirstVideoId] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState(null);

  useEffect(() => {
    const fetchFirstVideoId = async () => {
      try {
        const videoList = await apiClient.getVideos();
        setfirstVideoId(videoList[0].id);
      } catch (error) {
        console.log(`fetchFirstVideoId failed, ${error}`);
      }
    };
    fetchFirstVideoId();
  }, []);

  //Set initial active video id to be the first video's id
  let activeVideoId = params.videoId;
  if (!activeVideoId) {
    activeVideoId = firstVideoId;
  }

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        if (!activeVideoId) return;

        const videoResponse = await apiClient.getVideoDetails(activeVideoId);
        setDataLoading(false);
        setVideoDetails(videoResponse);
      } catch (error) {
        setDataLoading(false);
        setHasError(true);
      }
    };
    fetchVideoDetails();
  }, [activeVideoId]);


  useEffect(() => {
    const fetchVideoComments = async () => {
      try {
        if (!updatedDetails) return;
        const udpatedData = await apiClient.getVideoDetails(updatedDetails.id);
        setVideoDetails(udpatedData);
      } catch (error) {
        console.log(`fetchVideoComments failed, ${error}`);
      }
    };
    fetchVideoComments();
  }, [updatedDetails]);

  const showUpdatedComments = (activeVideo) => {
    setUpdatedDetails(activeVideo);
  };

  if (hasError) {
    return (
      <p>Unable to access video details right now. Please try again later.</p>
    );
  }

  if (dataLoading) {
    return <p>Loading video details...</p>;
  }

  return (
    <main>
      <section className="video-section">
        <video
          className="video-section__player"
          controls
          poster={videoDetails.image}
        ></video>
      </section>
      <section className="video-details-nav-wrap">
        {/* VideoDetails component for displaying video details and comments sections */}
        <VideoDetails
          videoDetails={videoDetails}
          showUpdatedComments={showUpdatedComments}
        />
        {/* VideoNavList component for displaying the side videos section */}
        <VideoNavList activeVideoId={activeVideoId} />
      </section>
    </main>
  );
}

export default Home;
