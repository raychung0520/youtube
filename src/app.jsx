import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]); // React Hook
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyB5og8jiif1YIuh8HvKV7xqB8cp8nfZKi4&part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyB5og8jiif1YIuh8HvKV7xqB8cp8nfZKi4",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []); // second parameter, when change of second parameter, the function would be called
  return <VideoList videos={videos} />;
}

export default App;
