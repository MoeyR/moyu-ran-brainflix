import VideoNavList from '../../components/VideoNavList/VideoNavList.jsx'
import VideoDetails from '../../components/VideoDetails/VideoDetails.jsx';
import { apiClient } from '../../utils/brain-flix-api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Home({firstVideoId}) {

    const params = useParams();
    //const [comments, setComments] = useState([]);
    const [videoDetails, setVideoDetails] = useState(null);
    const [dataLoading, setDataLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    //Set initial active video id to be the first video's id
    let activeVideoId = params.videoId;
    if(!activeVideoId){
        //activeVideoId = firstVideoId;
        //console.log(activeVideoId)
        activeVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8"   
    }

    useEffect(()=>{
        const fetchVideoDetails = async ()=>{
            try {
                const videoResponse = await apiClient.getVideoDetails(activeVideoId);
                setDataLoading(false);
                setVideoDetails(videoResponse);
                //console.log(activeVideoId)
                //console.log(videoResponse.comments)
                //setComments(videoResponse.comments);
            } catch (error) {
                setDataLoading(false);
                setHasError(true);
            }
        }
        fetchVideoDetails();
    },[activeVideoId])

    if (hasError) {
        return <p>Unable to access video details right now. Please try again later.</p>
    }

    if (dataLoading) {
        return <p>Loading video details...</p>
    }

    return (
        <main>
        <section className='video-section'>
            <video className='video-section__player' controls poster={videoDetails.image}></video>
        </section>
        <section className='video-details-nav-wrap'>
            {/* VideoDetails component for fetching and displaying details and comments sections */}
            <VideoDetails videoDetails={videoDetails}/>
            {/* VideoNavList component for displaying the side videos navigation bar */}
            <VideoNavList activeVideoId={activeVideoId}/>
        </section>
      </main>
    )
}

export default Home;