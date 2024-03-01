import axios from "axios";
const APIKEY = "d7ba838f-5663-4ea2-8d1d-29adfd09382d"

class BrainFlixApi {
    constructor(apikey){
        this.baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
        this.apikey = apikey;
    }

    //Get All Videos
    async getVideos(){
        try {
            const response = await axios.get(
                `${this.baseUrl}/videos?api_key=${this.apikey}`
            );
            return response.data;
        } catch (error) {
            console.log(`GET videos request failed, ${error}`);
        }
    }

    
    async getVideoDetails(id){
        try {
            const response = await axios.get(
                `${this.baseUrl}/videos/${id}`, 
                {
                    params: {
                        "Content-Type": "application/json",
                        "api_key": `${this.apikey}`
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.log(`GET video details request failed, ${error}`);
        }
    }


}


//Instantiate BrainFlixApi
const apiClient = new BrainFlixApi(APIKEY);

export {apiClient}