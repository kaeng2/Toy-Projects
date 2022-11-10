<template>
  <div>
    <ul :video="video" class="list-group list-group-flush">
      <li class="list-group-item">
        <div class="card mb-3 border border-0">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                :src="video.snippet.thumbnails.high.url"
                class="img-fluid rounded-start rounded"
                alt="thumbnail"
              />
            </div>

            <div class="col-md-8 align-self-stretch">
              <div class="card-body">
                <h5 class="card-title" @click="linkToVideo">
                  {{ video.snippet.title }}
                </h5>
                <!-- <p v-if="video.statistics.viewCount" class="card-text">
                  조회수
                  {{ parseInt(video.statistics?.viewCount).toLocaleString() }}회
                </p> -->
                <img
                  :src="video.channelImg"
                  id="channel-img"
                  class="rounded-circle"
                  @click="printImg"
                />
                <span class="card-text">{{ video.snippet.channelTitle }}</span>
                <p class="card-text mt-3">
                  <small class="text-muted">{{
                    video.snippet.description
                  }}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
<script>
export default {
  name: "VideoListItem",
  props: {
    video: Object,
  },
  methods: {
    linkToVideo() {
      window.open(
        `https://www.youtube.com/embed/${this.video.id.videoId}?autoplay=1&mute=1`
      )
    },
  },
}
</script>

<style>
.card {
  text-align: left;
}
.card-comp {
  margin-block: 20px;
}
#channel-img {
  width: 30px;
  height: 30px;
  margin: 10px;
}
</style>
