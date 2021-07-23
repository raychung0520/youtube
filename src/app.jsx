import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]); // React Hook
  const [selectedVideo, setSelctedVideo] = useState(null);
  const selectVideo = (video) => {
    setSelctedVideo(video);
  };
  const search = useCallback(
    (query) => {
      setSelctedVideo(null);
      youtube.search(query).then((videos) => setVideos(videos));
    },
    [youtube]
  );
  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]); // second parameter, when change of second parameter, the function would be called
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "video"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
