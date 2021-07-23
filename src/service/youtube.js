import axios from "axios";

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: key },
    });
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.date.items;
    // const response = await fetch(
    //   `https://youtube.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet&maxResults=25&chart=mostPopular`,
    //   this.getRequestOptions
    // );
    // const result_1 = await response.json();
    // return result_1.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
        type: "video",
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
