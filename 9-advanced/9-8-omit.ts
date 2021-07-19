{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata2 = Omit<Video, "url" | "data">;

  function getVideo2(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://...",
      data: "byte-data...",
    };
  }

  function getVideoMetadata2(id: string): VideoMetadata2 {
    return {
      id,
      title: "title",
    };
  }
}
