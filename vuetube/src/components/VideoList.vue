<template>
  <div>
    <ul v-for="(video, index) in videos" :key="index">
      <video-list-item :video="video" />
    </ul>
  </div>
</template>

<script>
import VideoListItem from "@/components/VideoListItem"
export default {
  name: "VideoList",
  components: {
    VideoListItem,
  },

  props: {
    videos: Array,
  },
}
</script>

<style></style>
