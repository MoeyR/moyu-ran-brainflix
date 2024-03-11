import axios from "axios";

class BrainFlixApi {
  constructor() {
    this.baseUrl = "http://localhost:8080";
  }

  //Get All Videos
  async getVideos() {
    try {
      const response = await axios.get(`${this.baseUrl}/videos`);
      return response.data;
    } catch (error) {
      console.log(`GET videos request failed, ${error}`);
    }
  }

  async getVideoDetails(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/videos/${id}`);
      return response.data;
    } catch (error) {
      console.log(`GET video details request failed, ${error}`);
    }
  }

  async postVideo(video) {
    try {
      await axios.post(`${this.baseUrl}/videos`, video, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.log(`POST video request failed, ${error}`);
    }
  }

  async postComment(id, comment) {
    try {
      await axios.post(`${this.baseUrl}/videos/${id}/comments`,comment);
    } catch (error) {
      console.log(`POST comment request failed, ${error}`);
    }
  }
}

//Instantiate BrainFlixApi
const apiClient = new BrainFlixApi();

export { apiClient };
