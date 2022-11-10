<template>
  <div id="video-detail">
    <iframe
      id="video-player"
      :src="`https://www.youtube.com/embed/${videoLink}?autoplay=1&mute=1`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <div class="center-block">
      <h3 class="fw-bold center-block">{{ mostPopularVideo.snippet.title }}</h3>
    </div>

    <img
      id="channel-img"
      :src="mostPopularVideo.channelImg"
      alt="channel img"
      class="rounded-circle"
    />
    <span>{{ mostPopularVideo.snippet.channelTitle }}</span>
    <p>{{ mostPopularVideo.description }}</p>
    <hr />
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: {
    mostPopularVideo: Object,
    videoLink: String,
  },
}
</script>

<style>
#video-detail {
  margin-block: 70px;
}
#video-player {
  width: 700px;
  height: 400px;
  margin-block-end: 30px;
}
#channel-img {
  width: 30px;
  height: 30px;
  margin: 10px;
}
</style>
