import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]); // React Hook
  const search = (query) => {
    youtube.search(query).then((videos) => setVideos(videos));
  };
  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, []); // second parameter, when change of second parameter, the function would be called
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
